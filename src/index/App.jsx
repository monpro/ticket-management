import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Submit from "./Submit";
import Journey from "./Journey";
import CitySelector from "../common/CitySelector";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector
} from "./actions";
import { bindActionCreators } from "redux";

const App = props => {
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    dispatch,
    departDate
  } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  // const doExchangeFromTo = useCallback(() => {
  //   dispatch(exchangeFromTo());
  // }, []);
  //
  // const doShowCitySelector = useCallback(v => {
  //   dispatch(showCitySelector(v));
  // }, []);

  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity
      },
      dispatch
    );
  }, []);

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="Tickets" onBack={onBack} />
      </div>
      <form className="form">
        <Journey
          from={from}
          to={to}
          // exchangeFromTo={doExchangeFromTo}
          // showCitySelector={doShowCitySelector}
          {...cbs}
        />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
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
