import React, { useCallback } from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "../common/Header";
import Nav from "../common/Nav";
import List from "./List";
import Filter from "./Filter";

const App = props => {
  const { from, to } = props;

  const onBack = useCallback(() => {
    window.history.back();
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
