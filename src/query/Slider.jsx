import React, { memo, useState, useMemo } from "react";
import PropTypes from "prop-types";
import leftPad from "left-pad";
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

  return <div></div>;
});

Slider.PropTypes = {
  title: PropTypes.string.isRequired,
  currentStartHours: PropTypes.number.isRequired,
  currentEndHours: PropTypes.number.isRequired,
  onStartChanged: PropTypes.func.isRequired,
  onEndChanged: PropTypes.func.isRequired
};

export default Slider;
