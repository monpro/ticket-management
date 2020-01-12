import React, { memo } from "react";
import { PropTypes } from "prop-types";

const Menu = memo(props => {
  const { show, options, onSelect, hiddenMenu } = props;

  return <div></div>;
});

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  hiddenMenu: PropTypes.func.isRequired
};

export default Menu;
