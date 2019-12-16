import React, { memo, useState, useCallback, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Filter.css";
import { ORDER_DEPART } from "./constant";
import Slider from "./Slider.jsx";

const checkedReducer = () => {};
const SingleFilter = memo(props => {
  const { name, checked, toggle, value } = props;

  return (
    <li
      className={classnames({ checked: checked })}
      onClick={() => toggle(value)}
    >
      {name}
    </li>
  );
});

SingleFilter.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const Option = memo(props => {
  const { title, options, checkedOptions, update } = props;

  const toggle = useCallback(
    val => {
      const newCheckedOptions = { ...checkedOptions };
      if (val in checkedOptions) {
        delete newCheckedOptions[val];
      } else {
        newCheckedOptions[val] = true;
      }
      update(newCheckedOptions);
    },
    [update, checkedOptions]
  );

  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options.map(option => {
          return (
            <SingleFilter
              {...option}
              key={option.value}
              checked={option.value in checkedOptions}
              toggle={toggle}
            />
          );
        })}
      </ul>
    </div>
  );
});

Option.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  checkedOptions: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
};

const BottomModel = memo(props => {
  const {
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
    setArriveTimeEnd,
    toggleIsFilterVisible
  } = props;

  const [localCheckedTicketTypes, dispatchLocalCheckedTicketTypes] = useReducer(
    checkedReducer,
    checkedTicketTypes,
    checkedTicketTypes => {
      return {
        ...checkedTicketTypes
      };
    }
  );

  const [localCheckedTrainTypes, dispatchLocalCheckedTrainTypes] = useReducer(
    checkedReducer,
    checkedTrainTypes,
    checkedTrainTypes => {
      return {
        ...checkedTrainTypes
      };
    }
  );

  const [
    localCheckedDepartStations,
    dispatchLocalCheckedDepartStations
  ] = useReducer(
    checkedReducer,
    checkedDepartStations,
    checkedDepartStations => {
      return {
        ...checkedDepartStations
      };
    }
  );

  const [
    localCheckedArriveStations,
    dispatchLocalCheckedArriveStations
  ] = useReducer(
    checkedReducer,
    checkedArriveStations,
    checkedArriveStations => {
      return {
        ...checkedArriveStations
      };
    }
  );

  const [localDepartTimeStart, setLocalDepartTimeStart] = useState(
    departTimeStart
  );
  const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd);
  const [localArriveTimeStart, setLocalArriveTimeStart] = useState(
    arriveTimeStart
  );
  const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd);

  const options = [
    {
      title: "seat",
      options: ticketTypes,
      checkedOptions: localCheckedTicketTypes,
      dispatch: dispatchLocalCheckedTicketTypes
    },
    {
      title: "train",
      options: trainTypes,
      checkedOptions: localCheckedTrainTypes,
      dispatch: dispatchLocalCheckedTrainTypes
    },
    {
      title: "depart stations",
      options: departStations,
      checkedOptions: localCheckedDepartStations,
      dispatch: dispatchLocalCheckedDepartStations
    },
    {
      title: "arrive stations",
      options: arriveStations,
      checkedOptions: localCheckedArriveStations,
      dispatch: dispatchLocalCheckedArriveStations
    }
  ];

  const onSubmitLocalState = () => {
    setCheckedArriveStations(localCheckedArriveStations);
    setCheckedDepartStations(localCheckedDepartStations);
    setCheckedTrainTypes(localCheckedTrainTypes);
    setCheckedTicketTypes(localCheckedTicketTypes);

    setDepartTimeStart(localDepartTimeStart);
    setDepartTimeEnd(localDepartTimeEnd);

    setArriveTimeStart(localArriveTimeStart);
    setArriveTimeEnd(localArriveTimeEnd);

    toggleIsFilterVisible();
  };

  const resetState = () => {
    if (isResetDisabled) {
      return;
    }
    dispatchLocalCheckedArriveStations({ type: "reset" });
    dispatchLocalCheckedDepartStations({ type: "reset" });
    dispatchLocalCheckedTrainTypes({ type: "reset" });
    dispatchLocalCheckedTicketTypes({ type: "reset" });

    setLocalDepartTimeStart(0);
    setLocalDepartTimeEnd(24);

    setLocalArriveTimeStart(0);
    setLocalArriveTimeEnd(24);
  };

  const isResetDisabled = useMemo(() => {
    return (
      Object.keys(localCheckedArriveStations).length === 0 &&
      Object.keys(localCheckedDepartStations).length === 0 &&
      Object.keys(localCheckedTrainTypes).length === 0 &&
      Object.keys(localCheckedTicketTypes).length === 0 &&
      localDepartTimeStart === 0 &&
      localDepartTimeEnd === 24 &&
      localArriveTimeStart === 0 &&
      localArriveTimeEnd === 24
    );
  }, [
    localCheckedArriveStations,
    localCheckedDepartStations,
    localCheckedTrainTypes,
    localCheckedTicketTypes,
    localDepartTimeStart,
    localDepartTimeEnd,
    localArriveTimeStart,
    localArriveTimeEnd
  ]);

  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span
              className={classnames("reset", {
                disabled: isResetDisabled
              })}
              onClick={resetState}
            >
              reset
            </span>
            <span className="ok" onClick={onSubmitLocalState}>
              submit
            </span>
          </div>
          <div className="options">
            {options.map(option => (
              <Option {...option} key={option.title} />
            ))}
            <Slider
              title="Depart Time"
              currentStartHours={localDepartTimeStart}
              currentEndHours={localDepartTimeEnd}
              onStartChanged={setLocalDepartTimeStart}
              onEndChanged={setLocalDepartTimeEnd}
            />
            <Slider
              title="Arrive Time"
              currentStartHours={localArriveTimeStart}
              currentEndHours={localArriveTimeEnd}
              onStartChanged={setLocalArriveTimeStart}
              onEndChanged={setLocalArriveTimeEnd}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

BottomModel.propTypes = {
  toggleIsFilterVisible: PropTypes.func.isRequired,

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

  const noChecked = useMemo(() => {
    return (
      Object.keys(checkedArriveStations).length === 0 &&
      Object.keys(checkedDepartStations).length === 0 &&
      Object.keys(checkedTrainTypes).length === 0 &&
      Object.keys(checkedTicketTypes).length === 0 &&
      departTimeStart === 0 &&
      departTimeEnd === 24 &&
      arriveTimeStart === 0 &&
      arriveTimeEnd === 24
    );
  }, [
    checkedArriveStations,
    checkedDepartStations,
    checkedTrainTypes,
    checkedTicketTypes,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  ]);
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
          className={classnames("item", {
            "item-on": isFilterVisible || !noChecked
          })}
          onClick={toggleIsFilterVisible}
        >
          <i className="icon"> {noChecked ? "\uf0f7" : "\uf446"}</i>
          Filters
        </span>
      </div>
      {isFilterVisible && (
        <BottomModel
          checkedTicketTypes={checkedTicketTypes}
          checkedTrainTypes={checkedTrainTypes}
          checkedDepartStations={checkedDepartStations}
          checkedArriveStations={checkedArriveStations}
          departTimeStart={departTimeStart}
          departTimeEnd={departTimeEnd}
          arriveTimeStart={arriveTimeStart}
          arriveTimeEnd={arriveTimeEnd}
          ticketTypes={ticketTypes}
          trainTypes={trainTypes}
          departStations={departStations}
          arriveStations={arriveStations}
          setCheckedArriveStations={setCheckedArriveStations}
          setCheckedDepartStations={setCheckedDepartStations}
          setCheckedTicketTypes={setCheckedTicketTypes}
          setCheckedTrainTypes={setCheckedTrainTypes}
          setDepartTimeStart={setDepartTimeStart}
          setDepartTimeEnd={setDepartTimeEnd}
          setArriveTimeStart={setArriveTimeStart}
          setArriveTimeEnd={setArriveTimeEnd}
          toggleIsFilterVisible={toggleIsFilterVisible}
        />
      )}
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
