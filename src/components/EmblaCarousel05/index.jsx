import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { dragFree: true, loop: true };

// Define an array of slide objects with iframe content
const SLIDES = [
  {
    image:
      "/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png",
  },
  {
    image: "/images/Untitled-Camera-2.png",
  },
  {
    image: "/images/SG01-Camera.webp",
  },
  {
    image:
      "/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png",
  },
  {
    image: "/images/Untitled-Camera-2.png",
  },
  {
    image: "/images/SG01-Camera.webp",
  },
];

const App = () => (
  <>
    {/* Uncomment the lines below if you have header and footer components */}
    {/* <Header /> */}
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    {/* <Footer /> */}
  </>
);

export default App;
