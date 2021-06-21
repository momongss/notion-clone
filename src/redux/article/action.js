import { ADD_ARTICLE, GET_ROOT, SHOW_ARTICLE } from "./types";

export const addPage = () => {
  return {
    type: ADD_ARTICLE,
  };
};

export const showPage = (content) => {
  return {
    type: SHOW_ARTICLE,
    payload: content,
  };
};

export const getRoot = (root) => {
  return {
    type: GET_ROOT,
    payload: root,
  };
};
