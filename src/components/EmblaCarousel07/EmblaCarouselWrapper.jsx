"use client";

import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const EmblaCarouselWrapper = ({ slides, thumbnails }) => {
  return (
    <EmblaCarousel
      slides={slides}
      thumbnails={thumbnails}
      options={{
        align: "start",
        loop: true,
        skipSnaps: false,
        containScroll: "trimSnaps",
        dragFree: false,
      }}
    />
  );
};

export default EmblaCarouselWrapper;
