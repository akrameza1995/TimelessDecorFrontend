import React from "react";
import ReactDOM from "react-dom/client";
import HomeStagingApp from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomeStagingApp />
  </React.StrictMode>
);
// Minor change to trigger redeployment
