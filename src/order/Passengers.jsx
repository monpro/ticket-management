import React, { memo } from "react";
import "./Passengers.css";
import PropTypes from "prop-types";
import { removePassenger } from "./actions";

const Passenger = memo(props => {
  const {
    id,
    name,
    followingAdult,
    ticketType,
    licenceNo,
    gender,
    birthday,
    onRemove
  } = props;

  return (
    <li className="passenger">
      <i className="delete" onClick={() => onRemove(id)}>
        -
      </i>
      {props.id}
    </li>
  );
});

Passenger.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  followingAdult: PropTypes.number,
  ticketType: PropTypes.string.required,
  licenceNo: PropTypes.string.required,
  gender: PropTypes.string,
  birthday: PropTypes.string,
  onRemove: PropTypes.func.isRequired
};
const Passengers = memo(props => {
  const { passengers, createAdult, createChild, removePassenger } = props;

  return (
    <div className="passengers">
      <ul>
        {passengers.map(passenger => {
          return (
            <Passenger
              {...passenger}
              key={passenger.id}
              onRemove={removePassenger}
            />
          );
        })}
      </ul>
      <section className="add">
        <div className="adult" onClick={() => createAdult()}>
          Add Adult
        </div>
        <div className="child" onClick={() => createChild()}>
          Add Children
        </div>
      </section>
    </div>
  );
});

Passengers.propTypes = {
  passengers: PropTypes.array.isRequired,
  createAdult: PropTypes.func.isRequired,
  createChild: PropTypes.func.isRequired
};

export default Passengers;
