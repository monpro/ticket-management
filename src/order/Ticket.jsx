import React, { memo } from "react";
import "./Ticket.css";
import PropTypes from "prop-types";

const Ticket = memo(props => {
  const { price, type } = props;
  return (
    <div className="ticket">
      <p>
        <span className="ticket-type">{type}</span>
        <span className="ticket-price">{price}</span>
      </p>
      <div className="label">Seat</div>
    </div>
  );
});

Ticket.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired
};

export default Ticket;
