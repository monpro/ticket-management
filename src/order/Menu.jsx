import React, { memo } from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import "./Menu.css";

const MenuItem = memo(props => {
  const { onPress, title, value, active } = props;
  return (
    <li className={classnames({ active })} onClick={() => onPress(value)}>
      {title}
    </li>
  );
});

MenuItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool.isRequired
};

const Menu = memo(props => {
  const { show, options, onPress, hiddenMenu } = props;
  return (
    <div>
      {show && <div className="menu-mask" onClick={() => hiddenMenu()}></div>}
      <div className={classnames("menu", { show })}>
        <div className="menu-title"></div>
        <ul>
          {options &&
            options.map(option => {
              return (
                <MenuItem
                  key={option.value}
                  {...option}
                  onPress={onPress}
                ></MenuItem>
              );
            })}
        </ul>
      </div>
    </div>
  );
});

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.array,
  onPress: PropTypes.func.isRequired,
  hiddenMenu: PropTypes.func.isRequired
};

export default Menu;
