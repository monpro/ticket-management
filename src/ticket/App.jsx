import "./App.css";
import React, { useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import URI from "urijs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Detail from "../common/Detail.jsx";
import Candidate from "./Candidate";
import Header from "../common/Header";
import Nav from "../common/Nav";
import useNav from "../common/useNav";
import {
  setDepartStation,
  setArriveStation,
  setTrainNumber,
  setDepartDate,
  setSearchParsed,
  prevDate,
  nextDate,
  setDepartTimeStr,
  setArriveTimeStr,
  setDurationStr,
  setArriveDate,
  setTickets,
  toggleIsScheduleVisible
} from "./actions";
import dayjs from "dayjs";
import { getDateWithDay } from "../common/helper";

const Schedule = lazy(() => import("./Schedule.jsx"));

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
    const { aStation, dStation, trainNumber, date } = queries;

    dispatch(setArriveStation(aStation));
    dispatch(setDepartStation(dStation));
    dispatch(setTrainNumber(trainNumber));
    dispatch(setDepartDate(getDateWithDay(dayjs(date).valueOf())));

    dispatch(setSearchParsed(true));
  }, []);

  useEffect(() => {
    document.title = trainNumber;
  }, [trainNumber]);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }

    const url = new URI("/rest/ticket")
      .setSearch("date", dayjs(departDate).format("YYYY-MM-DD"))
      .setSearch("trainNumber", trainNumber)
      .toString();

    fetch(url)
      .then(response => response.json())
      .then(result => {
        const { candidates, detail } = result;

        const {
          arriveDate,
          arriveTimeStr,
          departTimeStr,
          durationStr
        } = detail;

        dispatch(setDepartTimeStr(departTimeStr));
        dispatch(setArriveTimeStr(arriveTimeStr));
        dispatch(setDurationStr(durationStr));
        dispatch(setArriveDate(arriveDate));
        dispatch(setTickets(candidates));
      });
  }, [searchParsed, departDate, trainNumber]);

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  );

  const detailCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggleIsScheduleVisible
      },
      dispatch
    );
  }, []);

  if (!searchParsed) {
    return null;
  }

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header onBack={onBack} title={trainNumber} />
      </div>
      <div className="nav-wrapper">
        <Nav
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          prev={prev}
          next={next}
          date={departDate}
        />
      </div>
      <div className="detail-wrapper">
        <Detail
          departDate={departDate}
          arriveDate={arriveDate}
          departTimeStr={departTimeStr}
          arriveTimeStr={arriveTimeStr}
          departStation={departStation}
          arriveStation={arriveStation}
          trainNumber={trainNumber}
          durationStr={durationStr}
          {...detailCbs}
        />
      </div>
      <Candidate tickets={tickets} />
      {isScheduleVisible && (
        <div
          className="mask"
          onClick={() => dispatch(toggleIsScheduleVisible())}
        >
          <Suspense fallback={null}>
            <Schedule
              departDate={departDate}
              trainNumber={trainNumber}
              departStation={departStation}
              arriveStation={arriveStation}
            />
          </Suspense>
        </div>
      )}
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
