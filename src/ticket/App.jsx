import "./App.css";
import React from "react";
import { connect } from "react-redux";
const App = props => {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    tickets,
    isScheduleVisible,
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
  null,
  {
    mapStateToProps,
    mapDispatchToProps
  }
)(App);
