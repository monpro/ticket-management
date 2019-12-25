import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Candidate.css";

const Seat = memo(props => {
  const { type, priceMsg, ticketsLeft, channels } = props;
  return <li></li>;
});

Seat.propTypes = {
  type: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  ticketsLeft: PropTypes.string.isRequired,
  channels: PropTypes.array.isRequired
};

const Candidate = memo(props => {
  const { tickets } = props;
  return (
    <div className="candidate">
      <ul>
        {tickets.map((ticket, index) => {
          return <Seat {...ticket} key={ticket.type} />;
        })}
      </ul>
    </div>
  );
});

Candidate.propTypes = {
  tickets: PropTypes.array.isRequired
};
