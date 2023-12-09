import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("244b8808d0a1c68e717fb83e011bc7af", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
