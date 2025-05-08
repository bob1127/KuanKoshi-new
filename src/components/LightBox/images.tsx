import { FC } from "react";

interface ImagesProps {
  data: {
    src?: string;
    title: string;
    description: string;
    borderRadius?: string;
    customStyle?: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = ({ data, onClick }) => {
  return (
    <div className="wrapper p-4 md:p-8">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2 auto-rows-[150px] w-full mx-auto">
        {data.map((slide, index) => (
          <div
            key={index}
            className={`relative flex justify-center items-center   ${
              slide.customStyle || ""
            }`}
            onClick={() => onClick(index)}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.description}
                className={`w-full h-full border-2 border-black object-cover${
                  slide.borderRadius || ""
                }`}
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center  text-center p-2">
                {slide.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
