"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./page.module.scss";
import Picture1 from "../../../public/medias/4.jpg";
import Picture2 from "../../../public/medias/—Pngtree—green trees branches and leaves_4877518.png";
import Picture3 from "../../../public/medias/—Pngtree—tree branch_5643252.png";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const word = "with framer-motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const [offsets, setOffsets] = useState({ sm: 0, md: 0, lg: 0 });
  const [letterOffsets, setLetterOffsets] = useState([]);

  useEffect(() => {
    // ✅ 直接用 JS 生成數值，避免 useTransform
    setOffsets({ sm: -50, md: -150, lg: -250 });

    setLetterOffsets(
      word.split("").map(() => Math.floor(Math.random() * -75) - 25)
    );
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 animate={{ y: offsets.md }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => (
              <motion.span
                animate={{ top: letterOffsets[i] || 0 }}
                key={`l_${i}`}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {[Picture1, Picture2, Picture3].map((src, i) => (
          <motion.div
            animate={{ y: i === 0 ? 0 : offsets[i === 1 ? "lg" : "md"] }}
            key={`i_${i}`}
            className={styles.imageContainer}
          >
            <Image src={src} placeholder="blur" alt="image" fill />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
