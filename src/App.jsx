import "./App.css";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Main from "./components/Main";

import { api } from "./utils/api.js";

import { useState, createRef, useEffect } from "react";

import { connect } from "react-redux";
import { addPage, getRoot } from "./redux/article/action";

function App(props) {
  console.log(props);

  useEffect(async () => {
    props.getRoot();
    return () => {};
  }, []);

  return (
    <div className="App">
      <SideBar
        pagePrivate={props.articleList}
        onAddPage={props.addPage}
      ></SideBar>
      <div className="content-wrapper">
        <Header></Header>
        <Main pagePrivate={props.articleList}></Main>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.articleList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoot: async () => {
      const root = await api.getRootChildren();
      dispatch(getRoot(root));
    },
    addPage: () => {
      dispatch(addPage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
