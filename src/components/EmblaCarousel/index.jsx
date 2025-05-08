import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "./Emblacarousel";

import "./";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
