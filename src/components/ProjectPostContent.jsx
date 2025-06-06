"use client";

import { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import Lightbox from "yet-another-react-lightbox";
import {
  Zoom,
  Fullscreen,
  Download,
  Thumbnails,
  Captions,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function ProjectPostContent({ html, title }) {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(-1);

  const imagesRef = [];

  const replace = (domNode) => {
    if (
      domNode.type === "tag" &&
      (domNode.name === "html" ||
        domNode.name === "body" ||
        domNode.name === "head" ||
        (domNode.attribs?.class || "").includes("wp-block-gallery") ||
        (domNode.attribs?.class || "").includes("wp-block-image"))
    ) {
      return <>{domToReact(domNode.children, { replace })}</>;
    }

    if (
      domNode.type === "tag" &&
      domNode.name === "img" &&
      domNode.attribs?.src
    ) {
      const src = domNode.attribs.src;
      const imgIndex = imagesRef.length;
      imagesRef.push(src);

      const width = parseInt(domNode.attribs.width) || 800;
      const height = parseInt(domNode.attribs.height) || 600;
      const aspectRatio = width && height ? `${width} / ${height}` : undefined;

      return (
        <div
          className="zoom-wrapper cursor-zoom-in my-8"
          onClick={() => setIndex(imgIndex)}
          style={{ width: "100%", ...(aspectRatio ? { aspectRatio } : {}) }}
        >
          <img
            src={src}
            alt={domNode.attribs.alt || `${title} - 圖片${imgIndex + 1}`}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            className="w-full h-auto rounded shadow-sm"
            style={aspectRatio ? { aspectRatio } : {}}
          />
        </div>
      );
    }

    return undefined;
  };

  const content = parse(html, { replace });

  useEffect(() => {
    if (imagesRef.length > 0) {
      const uniqueSlides = Array.from(new Set(imagesRef)).map((src) => ({
        src,
      }));
      setSlides(uniqueSlides);
    }
  }, [html]);

  return (
    <>
      <div className="post-content">{content}</div>

      <Lightbox
        plugins={[Zoom, Fullscreen, Download, Thumbnails, Captions]}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}
