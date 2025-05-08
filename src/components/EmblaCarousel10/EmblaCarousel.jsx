import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";
import Link from "next/link";
import { DotButton, useDotButton } from "./EmblaCarosuelDotButton";
import Styles from "../../styles/embla.module.css";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div
      className="embla w-[100%]  p-4 m-auto"
      style={{
        "--slide-height": "19rem",
        "--slide-spacing": "1rem",
        "--slide-size": "55%",
      }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container flex touch-pan-y touch-pinch-zoom"
          style={{ marginLeft: "calc(var(--slide-spacing) * -1)" }}
        >
          {slides.map((slide, index) => (
            <div
              className="embla__slide transform flex-none min-w-0"
              key={index}
              style={{
                transform: "translate3d(0, 0, 0)",
                flex: "0 0 95%", // Increase this value to widen the slide
                paddingLeft: "var(--slide-spacing)",
              }}
            >
              <a
                href={slide.link} // Link for each slide
                rel="noopener noreferrer" // Security best practice
                style={{
                  display: "block",
                  height: "100%", // Ensure anchor fills the slide
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit text color
                }}
              >
                <div
                  style={{
                    boxShadow:
                      "inset 0 0 0 0.2rem var(--detail-medium-contrast)",
                    borderRadius: "1.8rem",
                    fontSize: "4rem",

                    userSelect: "none",
                  }}
                  className="embla__slide__number bg-white  shadow-2xl border border-black  p-3 overflow-visible lg:overflow-hidden  rounded-xl h-auto lg:h-[350px] 2xl:h-[400px]   flex flex-col  items-center justify-center font-semibold"
                >
                  <div className="flex  rounded-xl   bg-white flex-col h-auto lg:flex-row lg:h-[300px] p-1 md:p-3 justify-center items-center">
                    <Image
                      src={slide.image} // Use the image from the slide object
                      alt={slide.title} // Use title as alt text
                      className="xl:rounded-[30px] rounded-[16px] 2xl:w-[530px]   lg:w-[320px]"
                      width={800}
                      height={800}
                      placeholder="empty"
                      loading="lazy"
                    />
                    <div className="txt mt-[20px] flex-col flex justify-center rounded-xl p-2 md:p-[45px]   items-center w-full  md:w-[80%] mx-auto bg-white ">
                      <b className="  text-[14px] md:text-[26px] text-center">
                        {slide.title} {/* Display the title */}
                      </b>
                      <p className="hidden md:block  text-[13px] md:text-[18px]  font-normal text-center">
                        {slide.description} {/* Display the description */}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="embla__controls grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
          <div className="embla__buttons grid grid-cols-2 gap-[0.6rem] items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                aria-label={`滑動到第 ${index + 1} 項目`}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
