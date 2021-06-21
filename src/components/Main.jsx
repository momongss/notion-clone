import "./Main.css";
import { useState, createRef } from "react";

import { api } from "../utils/api.js";

import { connect } from "react-redux";

function Main(props) {
  console.log(props);
  const [contentRef, setContentRef] = useState(() => createRef());

  return (
    <div className="Main">
      <div className="title-wrapper">
        <div className="icon-wrapper">
          {props.currentArticle ? props.currentArticle.icon : ""}
        </div>
        <div className="controls"></div>
        <div className="title">
          <span
            contentEditable
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                contentRef.current.focus();
              }
            }}
          >
            {props.currentArticle ? props.currentArticle.title : ""}
          </span>
        </div>
      </div>
      <div className="content-wrapper" contentEditable ref={contentRef}>
        {props.currentArticle ? props.currentArticle.content : ""}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.articleList,
    currentArticle: state.currentArticle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
