// App.jsx
import React, { useEffect, useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
// import Header from "./Header";
// import Footer from "./Footer";
// import "../css/base.css";
// import "../css/sandbox.css";
// import "../css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set to true only after the component mounts (i.e., on the client side)
    setIsMounted(true);
  }, []);

  // Render nothing on the server side, render content only after mount
  if (!isMounted) return null;

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default App;
