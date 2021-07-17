import { combineReducers, createStore } from "redux";
import newsReducer from "./news-reducer";

const reducers = combineReducers({
  news: newsReducer
})

const store = createStore(reducers)

window.store = store

export default store