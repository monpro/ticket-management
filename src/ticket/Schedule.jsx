import React, { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Schedule.css";

const ScheduleRow = memo(props => {
  const {
    index,
    station,
    arriveTime,
    departTiem,
    stay,

    isStartStation,
    isEndStation,
    isDepartStation,
    isArriveStation,
    beforeDepartStation,
    afterArriveStation
  } = props;

  return (
    <div>
      <div
        className={classnames("icon", {
          "icon-red": isDepartStation || isArriveStation
        })}
      ></div>
    </div>
  );
});

const Schedule = memo(function Schedule(props) {
  const { departDate, trainNumber, departStation, arriveStation } = props;

  return <div className="schedule">schedule</div>;
});

Schedule.propTypes = {
  departDate: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  departStation: PropTypes.string.isRequired,
  arriveStation: PropTypes.string.isRequired
};

export default Schedule;
