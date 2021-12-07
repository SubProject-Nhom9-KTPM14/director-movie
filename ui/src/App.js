import React from "react";
import Router from "./routes";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};
function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Router />
    </Provider>
  )
    ;
}

export default App;
