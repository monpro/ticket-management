import React, { useCallback, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import URI from "urijs";
import dayjs from "dayjs";
import { getDateWithDay } from "../common/helper";
import Header from "../common/Header";
import Nav from "../common/Nav";
import List from "./List";
import Filter from "./Filter";

import { setFrom, setTo, setDepartDate, setHighSpeed } from "./actions";

const App = props => {
  const { from, to, dispatch } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);
    const { from, to, date, highSpeed } = queries;

    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(getDateWithDay(dayjs(date).valueOf())));
    dispatch(setHighSpeed(highSpeed === "true"));
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header onBack={onBack} title={`${from} - ${to}`} />
      </div>
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
