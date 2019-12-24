import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import URI from "urijs";
import dayjs from "dayjs";
import leftPad from "left-pad";
import "./Schedule.css";

const ScheduleRow = memo(props => {
  const {
    index,
    station,
    arriveTime,
    departTime,
    stay,

    isStartStation,
    isEndStation,
    isDepartStation,
    isArriveStation,
    beforeDepartStation,
    afterArriveStation
  } = props;
  /* eslint-disable no-console */
  console.log("this is", props);
  /* eslint-enable no-console */
  return (
    <li>
      <div
        className={classnames("icon", {
          "icon-red": isDepartStation || isArriveStation
        })}
      >
        {isDepartStation ? "D" : isArriveStation ? "A" : leftPad(index, 2, 0)}
      </div>
      <div
        className={classnames("row", {
          grey: beforeDepartStation || afterArriveStation
        })}
      >
        <span
          className={classnames("station", {
            red: isArriveStation || isDepartStation
          })}
        >
          {station}
        </span>
        <span
          className={classnames("arrtime", {
            red: isArriveStation
          })}
        >
          {isStartStation ? "Depart" : arriveTime}
        </span>
        <span
          className={classnames("arrtime", {
            red: isDepartStation
          })}
        >
          {isEndStation ? "Arrive" : departTime}
        </span>
        <span className="stoptime">
          {isStartStation || isEndStation ? "-" : stay}
        </span>
      </div>
    </li>
  );
});

const Schedule = memo(function Schedule(props) {
  const { departDate, trainNumber, departStation, arriveStation } = props;

  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const url = new URI("/rest/schedule")
      .setSearch("trainNumber", trainNumber)
      .setSearch("departStation", departStation)
      .setSearch("arriveStation", arriveStation)
      .setSearch("date", dayjs(departDate).format("YYYY-MM-DD"))
      .toString();

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let departRow;
        let arriveRow;
        data.forEach((v, index) => {
          if (!departRow) {
            if (v.station === departStation) {
              /* eslint-disable no-console */
              console.log(v.station);
              /* eslint-enable no-console */
              departRow = Object.assign(v, {
                ...v,
                beforeDepartStation: false,
                isDepartStation: true,
                afterArriveStation: false,
                isArriveStation: false
              });
            } else {
              Object.assign(v, {
                ...v,
                beforeDepartStation: true,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: false
              });
            }
          } else if (!arriveRow) {
            if (v.station === arriveStation) {
              arriveRow = Object.assign(v, {
                ...v,
                beforeDepartStation: false,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: true
              });
            } else {
              Object.assign(v, {
                ...v,
                beforeDepartStation: false,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: false
              });
            }
          } else {
            Object.assign(v, {
              ...v,
              beforeDepartStation: false,
              isDepartStation: false,
              afterArriveStation: true,
              isArriveStation: false
            });
          }

          Object.assign(v, {
            isStartStation: index === 0,
            isEndStation: index === data.length - 1
          });
        });
        /* eslint-disable no-console */
        console.log(data);
        /* eslint-enable no-console */
        setScheduleList(data);
      });
  }, [departDate, trainNumber, departStation, arriveStation]);

  return (
    <div className="schedule">
      <div className="dialog">
        <h1>TimeTable</h1>
        <div className="head">
          <span className="station">station</span>
          <span className="deptime">depart</span>
          <span className="arrtime">arrive</span>
          <span className="stoptime">stoptime</span>
        </div>
        {scheduleList.map((schedule, index) => {
          return (
            <ScheduleRow
              key={schedule.station}
              index={index + 1}
              {...schedule}
            />
          );
        })}
      </div>
    </div>
  );
});

Schedule.propTypes = {
  departDate: PropTypes.number.isRequired,
  trainNumber: PropTypes.string.isRequired,
  departStation: PropTypes.string.isRequired,
  arriveStation: PropTypes.string.isRequired
};

export default Schedule;
