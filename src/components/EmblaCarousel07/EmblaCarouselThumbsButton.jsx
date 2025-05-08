import React from "react";

export const Thumb = ({ selected, index, onClick, imageUrl }) => {
  return (
    <div
      className={`!bg-white embla-thumbs__slide ${
        selected ? " border-none" : "border-none"
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__image w-[70px] h-[70px] rounded-md mx-1  "
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: selected ? "2px solid #007bff" : "1px solid #ccc",
        }}
      />
    </div>
  );
};
