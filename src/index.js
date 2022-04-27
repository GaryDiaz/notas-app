import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Home";
import "./css/style.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
