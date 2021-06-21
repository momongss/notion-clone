import { createStore } from "redux";
import articleReducer from "./article/reducer";

const store = createStore(articleReducer);

export default store;
