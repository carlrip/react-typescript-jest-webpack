import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Heading } from "./Heading";
import { Content } from "./Content";

const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
