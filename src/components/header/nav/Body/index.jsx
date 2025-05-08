"use client";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "../../../AnimatedLink";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Body({ links, selectedLink, setSelectedLink, isOpen }) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: i * 0.02 } }}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="absolute leafs h-[170px] w-[130px] md:w-[220px] 2xl:w-[300px] md:h-[300px] bottom-0 left-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Image
                src="/images/welcome little one!-8 (1).png"
                alt="leaf's"
                placeholder="empty"
                loading="lazy"
                width={300}
                height={380}
              />
            </motion.div>
            <motion.div
              className="absolute w-[130px] h-[170px] leafs md:w-[220px] 2xl:w-[300px] md:h-[300px] bottom-0 rotate-[330deg] md:rotate-[-270deg] right-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Image
                src="/images/welcome little one!-8 (1).png"
                alt="leaf's"
                placeholder="empty"
                loading="lazy"
                width={300}
                height={380}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <AnimatedLink key={`l_${index}`} href={href}>
            <p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() =>
                setSelectedLink({ isActive: true, index: selectedLink.index })
              }
              className={
                selectedLink.isActive && selectedLink.index !== index
                  ? "opacity-50   text-[2rem] transition-opacity duration-300"
                  : "opacity-100 text-[2rem]"
              }
            >
              {getChars(title)}
            </p>
          </AnimatedLink>
        );
      })}
    </div>
  );
}
