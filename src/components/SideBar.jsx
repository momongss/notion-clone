import "./SideBar.css";
import React, { useState } from "react";

import { api } from "../utils/api";

import { connect } from "react-redux";
import { showPage } from "../redux/article/action";

function SideBar(props) {
  return (
    <div className="SideBar">
      <div className="user-info">
        <div className="user-icon-wrapper">
          <img src="https://lh3.googleusercontent.com/a-/AOh14GgA7MPUelqyZ6G0FUQy1yCrZ2uINVh6DGRvIf6-MQ=s100" />
        </div>
        <span>태형's Notion</span>
      </div>
      <div className="utils">
        <div className="search">
          <span>빠른 검색</span>
        </div>
        <div className="update">
          <span>모든 업데이트</span>
        </div>
        <div className="settings-member">
          <span>설정과 멤버</span>
        </div>
      </div>
      <div className="docs">
        <div className="docs-section">
          <div className="logo">
            <span>즐겨찾기</span>
          </div>
          <ul className="list">
            <li className="item">
              <div className="item-main">
                <div className="toggle-btn">
                  <i className="fas fa-caret-right"></i>
                </div>
                <div className="icon"></div>
                <div className="title">면접</div>
              </div>
              <div className="item-hover">
                <div className="more-btn">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="add-btn">
                  <i className="far fa-plus-square"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="docs-section">
          <div className="logo">
            <span>개인 페이지</span>
            <div className="item-hover">
              <div className="add-btn" onClick={props.onAddPage}>
                <i className="far fa-plus-square"></i>
              </div>
            </div>
          </div>
          <ul className="list">
            {props.pagePrivate.map((page) => {
              return (
                <li
                  className="item"
                  key={page.id}
                  onClick={() => {
                    props.showPage(page.id);
                  }}
                >
                  <div className="item-main">
                    <div className="toggle-btn">
                      {page.isOpen ? (
                        <i class="fas fa-caret-down"></i>
                      ) : (
                        <i className="fas fa-caret-right"></i>
                      )}
                    </div>
                    <div className="icon">{page.icon}</div>
                    <div className="title">{page.title}</div>
                  </div>
                  <div className="item-hover">
                    <div className="more-btn">
                      <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="add-btn">
                      <i className="far fa-plus-square"></i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
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
    showPage: async (id) => {
      const content = await api.getNodeContent(id);
      dispatch(showPage(content));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
