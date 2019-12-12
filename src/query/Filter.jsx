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
    isFilterVisible
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
  isFilterVisible: PropTypes.bool.isRequired
};
