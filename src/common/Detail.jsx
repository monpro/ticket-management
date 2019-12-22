import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

export default function Detail(props) {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr
  } = props;
  return <div></div>;
}

Detail.propTypes = {
  departDate: PropTypes.number.isRequired,
  arriveDate: PropTypes.number.isRequired,
  departTimeStr: PropTypes.string.isRequired,
  arriveTimeStr: PropTypes.string.isRequired,
  departStation: PropTypes.string.isRequired,
  arriveStation: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  durationStr: PropTypes.string.isRequired
};
