import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import "./styles.css";

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
