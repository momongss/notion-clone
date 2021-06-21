import { ADD_ARTICLE, GET_ROOT, SHOW_ARTICLE } from "./types";
import { getFormatTime } from "../../utils/getFormatTime.js";

const initialState = {
  articleList: [],
  currentArticle: { title: "ss" },
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const formatTime = getFormatTime(new Date());

      return {
        ...state,
        articleList: [
          {
            title: "제목 없음",
            createAt: formatTime,
            updateAt: formatTime,
            icon: "",
          },
          ...state.articleList,
        ],
      };
    case SHOW_ARTICLE:
      console.log(action.payload);
      return {
        ...state,
        currentArticle: action.payload,
      };

    case GET_ROOT:
      return {
        ...state,
        articleList: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
