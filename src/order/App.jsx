import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "../common/Header";
import Account from "./Account";
import Choose from "./Choose";
import Passengers from "./Passengers";
import Ticket from "./Ticket";

const App = props => {
  const {
    trainNumber,
    departStation,
    arriveStation,
    seatType,
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    durationStr,
    price,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,
    dispatch
  } = props;

  return <div className="app"></div>;
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
