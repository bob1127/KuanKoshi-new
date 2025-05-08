import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";

import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./images";

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
        className=""
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        // open={open}
        // close={() => setOpen(false)}
        className="!z-[99999999999999]  !fixed"
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;
