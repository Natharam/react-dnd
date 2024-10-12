import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

interface ServiceWorkerOptions {
  url: string;
}

let appReady: Promise<void> = Promise.resolve();

// Enable API mocking only in development
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  const serviceWorkerOptions: ServiceWorkerOptions = {
    url: "/mockServiceWorker.js",
  };

  appReady = worker.start({
    serviceWorker: serviceWorkerOptions,
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Type assertion for TypeScript
);

appReady.then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

reportWebVitals();
