import React, { memo } from "react";
import "./Passengers.css";
import PropTypes from "prop-types";

const Passenger = memo(props => {
  return <li>{props.id}</li>;
});

Passenger.propTypes = {};
const Passengers = memo(props => {
  const { passengers, createAdult, createChild } = props;

  return (
    <div className="passengers">
      <ul>
        {passengers.map(passenger => {
          return <Passenger {...passenger} key={passenger.id} />;
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
