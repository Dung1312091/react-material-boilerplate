import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import theme from "./theme";
import history from "./configs/history";
import configureStore from "./configs/configureStore";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}{" "}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
