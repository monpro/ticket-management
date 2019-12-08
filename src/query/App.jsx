import React from "react";
import "./App.css";
import { connect } from "react-redux";

import Nav from "../common/Nav";
import List from "./List";
import Filter from "./Filter";
const App = props => {
  return (
    <div>
      <Nav />
      <List />
      <Filter />
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
