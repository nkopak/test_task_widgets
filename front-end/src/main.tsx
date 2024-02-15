import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ReviewProvider } from "./context/reviewContext.tsx";
import "./index.css";

import "primereact/resources/themes/nova/theme.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReviewProvider>
      <App />
    </ReviewProvider>
  </React.StrictMode>
);
