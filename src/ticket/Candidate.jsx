import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Candidate.css";

const Channel = null;

const Seat = memo(props => {
  const { type, priceMsg, ticketsLeft, channels } = props;
  return (
    <li>
      <div className="bar">
        <span className="seat">{type}</span>
        <span className="price">
          <i>$</i>
          {priceMsg}
        </span>
        <span className="btn">close</span>
        <span className="num">{ticketsLeft}</span>
      </div>
      <div className="channels">
        {channels.map(channel => {
          return <Channel key={channel.name} {...channel} type={type} />;
        })}
      </div>
    </li>
  );
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

export default Candidate;
