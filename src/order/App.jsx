import React, { useCallback, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import URI from "urijs";
import dayjs from "dayjs";
import Header from "../common/Header";
import Account from "./Account";
import Choose from "./Choose";
import Passengers from "./Passengers";
import Ticket from "./Ticket";

import {
  setArriveStation,
  setDepartStation,
  setSeatType,
  setDepartDate,
  setTrainnumber,
  setSearchParsed
} from "./actions";

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

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);

    const { aStation, dStation, type, date, trainNumber } = queries;

    dispatch(setArriveStation(aStation));
    dispatch(setDepartStation(dStation));
    dispatch(setSeatType(type));
    dispatch(setDepartDate(dayjs(date)).valueOf());
    dispatch(setTrainnumber(trainNumber));
    dispatch(setSearchParsed(true));
  }, []);

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header onBack={onBack} title={"order"} />
      </div>
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
