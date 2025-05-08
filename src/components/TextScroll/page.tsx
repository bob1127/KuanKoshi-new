import { twMerge } from "tailwind-merge";

type ParallaxImageProps = {
  smallImage: string;
  largeImage: string;
  smallImageSide: "left" | "right";
  parallaxDistance: string;
};

const ParallaxImage = ({
  smallImage,
  largeImage,
  smallImageSide,
  parallaxDistance,
}: ParallaxImageProps) => {
  return (
    <div
      className={twMerge(
        "col-[wide] my-20 grid gap-3 [view-timeline-name:--parallax-wrapper]",
        smallImageSide === "left"
          ? "md:grid-cols-[1fr_2fr]"
          : "md:grid-cols-[2fr_1fr]"
      )}
    >
      <div className="self-start mt-20 lg:mt-0">
        <div
          className="md:supports-[animation-timeline]:parallax-image relative"
          style={{ "--movement": parallaxDistance } as React.CSSProperties}
        >
          <div className="absolute bottom-full pb-5 text-[8px] uppercase">
            <p>Teenie-tiny.</p>
            <p className="text-gray-400">
              The Tadpole is just a tad taller than a gummy bear. It fits in
              your hand and rests nicely on your laptop display.
            </p>
          </div>
          <img src={smallImage} alt="" className="rounded-md" />
        </div>
      </div>

      <img
        src={largeImage}
        alt=""
        className={twMerge(
          "rounded-md",
          smallImageSide === "right" && "md:-order-1"
        )}
      />
    </div>
  );
};

function App() {
  return (
    <main className="wrapper">
      <div className="full-bleed relative z-10 flex h-screen items-center bg-zinc-800 bg-[url(/images/ph_esperanza.jpg)] bg-cover bg-center pb-20">
        <div className="mx-auto w-full max-w-5xl px-2 md:px-4">
          <h2 className="text-2xl text-white md:text-4xl">
            A new species
            <br /> of webcam
          </h2>
        </div>
      </div>

      <div className="mt-[-100vh] lg:block hidden h-[400vh] [view-timeline-name:--reveal-wrapper]">
        <div className="sticky top-0 flex min-h-screen items-center justify-center">
          <div>
            <p className="supports-[animation-timeline]:reveal-text text-xl text-black md:text-[2.3rem] lg:text-[2rem] lg:leading-[1]">
              被動設計是指最大限度地利用太陽、風等自然能源，創造舒適節能的居住環境的設計思想和設計方法。
            </p>
          </div>
        </div>
      </div>

      <ParallaxImage
        smallImage="/images/ph_minna-no-ie.jpg"
        largeImage="/images/hadashinoie016-2048x1365.jpg.webp"
        smallImageSide="left"
        parallaxDistance="100%"
      />

      <ParallaxImage
        smallImage="/images/hadashinoie016-2048x1365.jpg.webp"
        largeImage="/images/hadashinoie016-2048x1365.jpg.webp"
        smallImageSide="right"
        parallaxDistance="100%"
      />
    </main>
  );
}

export default App;
