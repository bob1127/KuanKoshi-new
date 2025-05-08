import "./page.css";

/**
// Credits for the pictures:
// https://unsplash.com/photos/assorted-candies-and-chocolate-pack-VklmASEqBvQ
// https://unsplash.com/photos/assorted-color-abstract-painting-tZc3vjPCk-Q
// https://unsplash.com/photos/person-using-marshall-headphones-jmZ6QjvJjvk
 */

function App() {
  return (
    <div className="wrapper w-[100%] overflow-hidden">
      <div className="slider-container">
        <Slide imageSrc="/images/ph_takahiradai-no-ie.jpg" />
        <Slide imageSrc="/images/ph_esperanza.jpg" />
        <Slide imageSrc="/images/hadashinoie016-2048x1365.jpg.webp" />
      </div>
    </div>
  );
}

type SlideProps = {
  imageSrc: string;
};

const Slide = ({ imageSrc }: SlideProps) => (
  <div className="slide">
    <img src={imageSrc} alt="" />
    <a href="#">
      View case <ArrowRight />
    </a>
  </div>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default App;
