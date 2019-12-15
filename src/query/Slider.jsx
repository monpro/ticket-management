import React, { memo, useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import leftPad from "left-pad";
import "./Slider.css";
import useWinSize from "./useWindowsSize";
const Slider = memo(props => {
  const {
    title,
    currentStartHours,
    currentEndHours,
    onStartChanged,
    onEndChanged
  } = props;

  const [start, setStart] = useState(() => (currentStartHours / 24) * 100);
  const [end, setEnd] = useState(() => (currentEndHours / 24) * 100);

  const prevStartHours = useRef(currentStartHours);
  const prevEndHours = useRef(currentEndHours);

  if (prevStartHours.current !== currentStartHours) {
    setStart((currentStartHours / 24) * 100);
    prevStartHours.current = currentStartHours;
  }

  if (prevEndHours.current !== currentEndHours) {
    setEnd((currentEndHours / 24) * 100);
    prevEndHours.current = currentEndHours;
  }

  const windowsSize = useWinSize();
  const parsedStart = useMemo(() => {
    if (start > 100) {
      return 100;
    } else if (start < 0) {
      return 0;
    }
    return start;
  }, [start]);

  const parsedEnd = useMemo(() => {
    if (end > 100) {
      return 100;
    } else if (end < 0) {
      return 0;
    }
    return end;
  }, [end]);

  const startHours = useMemo(() => {
    return Math.round((start * 24) / 100);
  }, [parsedStart]);

  const endHours = useMemo(() => {
    return Math.round((end * 24) / 100);
  }, [parsedEnd]);

  const startText = useMemo(() => {
    return leftPad(startHours, 2, "0") + ":00";
  }, [startHours]);

  const endText = useMemo(() => {
    return leftPad(endHours, 2, "0") + ":00";
  }, [endHours]);

  const startHandle = useRef();
  const endHandle = useRef();

  const lastStartXais = useRef();
  const lastEndXais = useRef();

  const range = useRef();
  const rangeWidth = useRef();

  const onStartTouchStart = e => {
    const touch = e.targetTouches[0];
    lastStartXais.current = touch.pageX;
  };

  const onEndTouchStart = e => {
    const touch = e.targetTouches[0];
    lastEndXais.current = touch.pageX;
  };

  const onStartTouchMove = e => {
    const touch = e.targetTouches[0];
    const distance = touch.pageX - lastStartXais.current;
    lastStartXais.current = touch.pageX;
    setStart(start => start + (distance / rangeWidth.current) * 100);
  };

  const onEndTouchMove = e => {
    const touch = e.targetTouches[0];
    const distance = touch.pageX - lastEndXais.current;
    lastEndXais.current = touch.pageX;
    setEnd(end => end + (distance / rangeWidth.current) * 100);
  };

  useEffect(() => {
    startHandle.current.addEventListener(
      "touchstart",
      onStartTouchStart,
      false
    );

    startHandle.current.addEventListener("touchmove", onStartTouchMove, false);

    endHandle.current.addEventListener("touchstart", onEndTouchStart, false);

    endHandle.current.addEventListener("touchmove", onEndTouchMove, false);

    return () => {
      startHandle.current.removeEventListener(
        "touchstart",
        onStartTouchStart,
        false
      );

      startHandle.current.removeEventListener(
        "touchmove",
        onStartTouchMove,
        false
      );

      endHandle.current.removeEventListener(
        "touchstart",
        onEndTouchStart,
        false
      );

      endHandle.current.removeEventListener("touchmove", onEndTouchMove, false);
    };
  });

  useEffect(() => {
    rangeWidth.current = parseFloat(
      window.getComputedStyle(range.current).width
    );
  }, [windowsSize.width]);

  useEffect(() => {
    onStartChanged(startHours);
  }, [startHours]);

  useEffect(() => {
    onEndChanged(endHours);
  }, [endHours]);

  return (
    <div className="option">
      <h3>{title}</h3>
      <div className="range-slider">
        <div className="slider" ref={range}>
          <div
            className="slider-range"
            style={{
              left: parsedStart + "%",
              width: parsedEnd - parsedStart + "%"
            }}
          ></div>
          <i
            ref={startHandle}
            className="slider-handle"
            style={{
              left: parsedStart + "%"
            }}
          >
            <span> {startText} </span>
          </i>
          <i
            ref={endHandle}
            className="slider-handle"
            style={{
              left: parsedEnd + "%"
            }}
          >
            <span> {endText} </span>
          </i>
        </div>
      </div>
    </div>
  );
});

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  currentStartHours: PropTypes.number.isRequired,
  currentEndHours: PropTypes.number.isRequired,
  onStartChanged: PropTypes.func.isRequired,
  onEndChanged: PropTypes.func.isRequired
};

export default Slider;
