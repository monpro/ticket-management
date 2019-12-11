import React, { useMemo, memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import dayjs from "dayjs";
import "./Nav.css";

const Nav = memo(function(props) {
  const { date, prev, next, isPrevDisabled, isNextDisabled } = props;

  const currentDateString = useMemo(() => {
    const dateObj = dayjs(date);
    return dateObj.format("M.D") + dateObj.format("ddd");
  }, [date]);
  return (
    <div className="nav">
      <span
        onClick={prev}
        className={classnames("nav-prev", {
          "nav-disabled": isPrevDisabled
        })}
      >
        prev Day
      </span>
      <span className="nav-date">{currentDateString}</span>
      <span
        onClick={next}
        className={classnames("nav-next", {
          "nav-disabled": isNextDisabled
        })}
      >
        Next Day
      </span>
    </div>
  );
});

export default Nav;

Nav.propTypes = {
  date: PropTypes.number.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired
};
