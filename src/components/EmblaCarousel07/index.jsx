"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import Footer from "./Footer";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);

export default Page;
