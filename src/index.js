import "./styles.css";
import React from 'react'
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));
console.log({ root })
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
