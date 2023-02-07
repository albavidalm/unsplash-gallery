import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import "./stylesheets/GalleryApp.scss";
import GalleryApp from "./components/GalleryApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GalleryApp />
  </React.StrictMode>
);
