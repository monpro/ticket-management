import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import "./Detail.css";
import { toggleIsScheduleVisible } from "../ticket/actions";

const formatDString = dString => {
  const date = dayjs(dString);

  return date.format("MM-DD") + " " + date.format("ddd");
};

const Detail = memo(function Detail(props) {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    toggleIsScheduleVisible
  } = props;

  const departDateStr = useMemo(() => formatDString(departDate), [departDate]);
  const arriveDateStr = useMemo(() => formatDString(arriveDate), [arriveDate]);

  return (
    <div className="detail">
      <div className="content">
        <div className="left">
          <p className="city"> {departStation} </p>
          <p className="time"> {departTimeStr} </p>
          <p className="date"> {departDateStr} </p>
        </div>
        <div className="middle">
          <p className="train-name"> {trainNumber} </p>
          <p className="train-mid">
            <span className="left"></span>
            <span
              className="schedule"
              onClick={() => toggleIsScheduleVisible()}
            >
              Time
            </span>
            <span className="right"></span>
          </p>
          <p className="train-time">{durationStr}</p>
        </div>
        <div className="right">
          <p className="city"> {arriveStation} </p>
          <p className="time"> {arriveTimeStr} </p>
          <p className="date"> {arriveDateStr} </p>
        </div>
      </div>
    </div>
  );
});

Detail.propTypes = {
  departDate: PropTypes.number.isRequired,
  arriveDate: PropTypes.number.isRequired,
  departStation: PropTypes.string.isRequired,
  arriveStation: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  departTimeStr: PropTypes.string,
  arriveTimeStr: PropTypes.string,
  durationStr: PropTypes.string
};

export default Detail;
