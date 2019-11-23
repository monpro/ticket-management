import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Submit from "./Submit";
import Journey from "./Journey";

const App = props => {
  return (
      <div>
          <Header />
          <Journey />
          <DepartDate />
          <HighSpeed />
          <Submit />
      </div>
  );
};

export default connect(
  null,
  {}
)(App);
