import React, { memo } from "react";
import PropTypes from "prop-types";
import "./List.css";

const ListItem = memo(props => {
  const {
    dTime,
    aTime,
    dStation,
    aStation,
    trainNumber,
    date,
    time,
    priceMsg,
    dayAfter
  } = props;

  return <li className="list-item"></li>;
});

ListItem.propTypes = {
  dTime: PropTypes.string.isRequired,
  aTime: PropTypes.string.isRequired,
  dStation: PropTypes.string.isRequired,
  aStation: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  dayAfter: PropTypes.string.isRequired
};

const List = memo(props => {
  const { list } = props;

  return (
    <ul className="list">
      {list.map(item => (
        <ListItem {...item} key={item.trainNumber} />
      ))}
    </ul>
  );
});

List.propTypes = {
  list: PropTypes.array.isRequired
};

export default List;
