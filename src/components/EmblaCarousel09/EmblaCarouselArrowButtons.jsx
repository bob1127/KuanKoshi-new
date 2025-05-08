import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
      aria-label="button"
    >
      <p className="rotate-[180deg] w-[35px] h-[35px] md:w-[50px] md:h-[50px] items-center rounded-full p-2 flex justify-center  bg-[#fdb715] text-black text-[18px] md:text-[30px]">
        →
      </p>

      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button bg-transparent inline-flex items-center justify-center cursor-pointer border-0 p-0 m-0 w-[3.6rem] h-[3.6rem]  rounded-full z-[1] text-body shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] embla__button--next"
      type="button"
      aria-label="button"
      style={{
        WebkitTapHighlightColor:
          "rgba(var(--text-high-contrast-rgb-value), 0.5)",
        WebkitAppearance: "none",
        appearance: "none",
        touchAction: "manipulation",
        color: "var(--text-body)",
      }}
      {...restProps}
    >
      <p className="items-center rounded-full w-[35px] h-[35px] md:w-[50px] md:h-[50px] p-2 flex justify-center  bg-[#fdb715] text-black inlin-block text-[18px] md:text-[30px]">
        →
      </p>
    </button>
  );
};
