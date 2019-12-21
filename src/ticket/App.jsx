import "./App.css";
import React, { useEffect } from "react";
import URI from "urijs";
import { connect } from "react-redux";

import Detail from "../common/Detail.jsx";
import Candidate from "./Candidate";
import Schedule from "./Schedule";

import {
  setDepartStation,
  setArriveStation,
  setTrainNumber,
  setDepartdate,
  setSearchParsed
} from "./actions";
import dayjs from "dayjs";
import { getDateWithDay } from "../common/helper";

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

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);
    const [aStation, dStation, trainNumber, date] = queries;

    dispatch(setArriveStation(aStation));
    dispatch(setDepartStation(dStation));
    dispatch(setTrainNumber(trainNumber));
    dispatch(setDepartdate(getDateWithDay(dayjs(date).valueOf())));

    dispatch(searchParsed(true));
  }, []);
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
