import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Filter.css";
import { ORDER_DEPART } from "./constant";

export default function Filter(props) {
  const {
    toggleHighSpeed,
    toggleIsFilterVisible,
    toggleOnlyTickets,
    toggleOrderType,
    highSpeed,
    orderType,
    onlyTickets,
    isFilterVisible,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    setCheckedArriveStations,
    setCheckedDepartStations,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd
  } = props;
  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={toggleOrderType}>
          <i className="icon"> &#xf065;</i>
          {orderType === ORDER_DEPART
            ? "departTime early->late"
            : "time short->long"}
        </span>
        <span
          className={classnames("item", { "item-on": highSpeed })}
          onClick={toggleHighSpeed}
        >
          <i className="icon"> {highSpeed ? "\uf43f" : "\uf43e"}</i>
          only show train
        </span>
        <span
          className={classnames("item", { "item-on": onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className="icon"> {onlyTickets ? "\uf43f" : "\uf43e"}</i>
          only show available
        </span>
        <span
          className={classnames("item", { "item-on": isFilterVisible })}
          onClick={toggleIsFilterVisible}
        >
          <i className="icon"> {"\uf0f7"}</i>
          Filters
        </span>
      </div>
    </div>
  );
}

Filter.propTypes = {
  toggleHighSpeed: PropTypes.func.isRequired,
  toggleIsFilterVisible: PropTypes.func.isRequired,
  toggleOnlyTickets: PropTypes.func.isRequired,
  toggleOrderType: PropTypes.func.isRequired,
  highSpeed: PropTypes.bool.isRequired,
  orderType: PropTypes.number.isRequired,
  onlyTickets: PropTypes.bool.isRequired,
  isFilterVisible: PropTypes.bool.isRequired,

  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired,
  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,

  setCheckedArriveStations: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired
};
