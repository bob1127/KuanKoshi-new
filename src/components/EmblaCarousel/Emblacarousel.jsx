import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import useEmblaCarousel from "embla-carousel-react";

// ✅ Thumbnail Button Component
const Thumb = ({ onClick, selected, index }) => (
  <button
    className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
      selected ? "border-blue-500" : "border-gray-300"
    }`}
    onClick={() => onClick(index)}
  >
    {index + 1}
  </button>
);

// ✅ EmblaCarousel Component
const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="max-w-[48rem] mx-auto">
      {/* Main Embla Carousel */}
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex gap-4">
          {slides.map((index) => (
            <div key={index} className="flex-none w-full pl-4">
              <div className="shadow-inner border border-gray-500 rounded-2xl text-4xl font-semibold flex items-center justify-center h-[19rem] select-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-3">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row gap-3">
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={onThumbClick}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

// ✅ Render App to DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
