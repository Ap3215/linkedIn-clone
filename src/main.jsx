import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { userStore } from "./app/user-store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={userStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
