import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reducer from "./reducer";

// console.warn('env',process.env.NODE_ENV );

const store = createStore(reducer, applyMiddleware(
    reduxLogger
));

export default store;
