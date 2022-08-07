import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting";
import BetterGreeting from "./BetterGreeting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
    <BetterGreeting />
  </React.StrictMode>
);
