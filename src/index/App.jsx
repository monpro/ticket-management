import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Submit from "./Submit";
import Journey from "./Journey";

import { exchangeFromTo, showCitySelector } from "./actions";

const App = props => {
  const { from, to, dispatch } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const doExchangeFromTo = useCallback(() => {
    dispatch(exchangeFromTo());
  }, []);

  const doShowCitySelector = useCallback(v => {
    dispatch(showCitySelector(v));
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="Tickets" onBack={onBack} />
      </div>
      <Journey
        from={from}
        to={to}
        exchangeFromTo={doExchangeFromTo}
        showCitySelector={doShowCitySelector}
      />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
