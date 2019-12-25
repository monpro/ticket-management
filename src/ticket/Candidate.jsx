import React, { memo, useState, useCallback, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import URI from "urijs";
import dayjs from "dayjs";
import { TrainContext } from "./context";
import "./Candidate.css";

const Channel = memo(props => {
  const { name, desc, type } = props;
  const { trainNumber, departStation, arriveStation, departDate } = useContext(
    TrainContext
  );

  const srcUrl = useMemo(() => {
    return new URI("order.html")
      .setSearch("trainNumber", trainNumber)
      .setSearch("dStation", departStation)
      .setSearch("aStation", arriveStation)
      .setSearch("type", type)
      .setSearch("date", dayjs(departDate).format("YYYY-MM-DD"))
      .toString();
  }, [trainNumber, departStation, arriveStation, departDate, type]);
  return (
    <div className="channel">
      <div className="middle">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <a href={srcUrl} className="buy-wrapper">
        <div className="buy">buy ticket</div>
      </a>
    </div>
  );
});

Channel.propTypes = {};

const Seat = memo(props => {
  const {
    type,
    priceMsg,
    ticketsLeft,
    channels,
    expand,
    onToggle,
    index
  } = props;
  return (
    <li>
      <div className="bar" onClick={() => onToggle(index)}>
        <span className="seat">{type}</span>
        <span className="price">
          <i>$</i>
          {priceMsg}
        </span>
        <span className="btn">{expand ? "buy" : "close"}</span>
        <span className="num">{ticketsLeft}</span>
      </div>
      <div
        className="channels"
        style={{ height: expand ? channels.length * 55 + "px" : 0 }}
      >
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
  channels: PropTypes.array.isRequired,
  expand: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

const Candidate = memo(props => {
  const { tickets } = props;
  const [expandIndex, setExpandIndex] = useState(-1);

  const onToggle = useCallback(
    index => {
      setExpandIndex(index === expandIndex ? -1 : index);
    },
    [expandIndex]
  );
  return (
    <div className="candidate">
      <ul>
        {tickets.map((ticket, index) => {
          return (
            <Seat
              onToggle={onToggle}
              expand={expandIndex === index}
              {...ticket}
              index={index}
              key={ticket.type}
            />
          );
        })}
      </ul>
    </div>
  );
});

Candidate.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default Candidate;
