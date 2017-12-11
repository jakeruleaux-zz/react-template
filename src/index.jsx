import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import App from "./components/App";
import { Provider } from "react-redux";




ReactDOM.render(
  <Provider>
    <HashRouter>
      <App />
    </HashRouter>  
  </Provider>,
  document.getElementById("react-app-root")
);
