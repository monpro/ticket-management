import React, { useMemo } from "react";
import { getDateWithDay } from "../common/helper";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import "./DepartDate.css";

export default function DepartDate(props) {
  const { time, onClick } = props;

  const days = getDateWithDay(time);

  const departDate = new Date(days);
  const departDateString = useMemo(() => {
    return dayjs(days).format("YYYY-MM-DD");
  }, [days]);
  const isToday = days === getDateWithDay();

  const weekDayString =
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ][departDate.getDay()] + (isToday ? "(Today)" : "");

  return (
    <div className="depart-data" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className="depart-week">{weekDayString}</span>
    </div>
  );
}

DepartDate.propTypes = {
  time: PropTypes.number,
  onClick: PropTypes.func.isRequired
};
