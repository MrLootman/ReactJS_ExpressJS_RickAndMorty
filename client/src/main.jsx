import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import router from "./Router.jsx";

import "./styles/imports.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
