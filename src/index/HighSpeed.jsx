import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./HighSpeed.css";

export default function HighSpeed(props) {
  const { highSpeed, toggle } = props;

  return (
    <div className="high-speed">
      <div className="high-speed-label">only show train</div>
      <div className="high-speed-switch" onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed} />
        <div
          className={classnames("high-speed-track", {
            checked: highSpeed
          })}
        >
          <span
            className={classnames("high-speed-handle", {
              checked: highSpeed
            })}
          />
        </div>
      </div>
    </div>
  );
}

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
