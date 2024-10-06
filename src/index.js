import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

let appReady = Promise.resolve();

// Enable API mocking only in development
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  appReady = worker.start({
    serviceWorker: {
      /**
       * Use a custom Service Worker script URL to resolve
       * the mock worker served by Codesandbox.
       * @note You DO NOT need this in your application.
       * @see https://mswjs.io/docs/api/setup-worker/start#serviceworker
       */
      url: "/mockServiceWorker.js",
    },
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));

appReady.then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
