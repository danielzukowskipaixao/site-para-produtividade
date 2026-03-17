import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      {/* App is static; React reserved for future interactive widgets. */}
    </React.StrictMode>
  );
}
