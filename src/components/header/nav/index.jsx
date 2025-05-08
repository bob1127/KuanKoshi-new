"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "關於宜園",
    href: "/about",
    src: "home.png",
  },
  {
    title: "經典選粹",
    href: "/project",
    src: "shop.png",
  },
  {
    title: "線上熱銷",
    href: "/hot-sale",
    src: "home.png",
  },
  {
    title: "建築思維",
    href: "/thinking",
    src: "lookbook.png",
  },
  {
    title: "新聞中心",
    href: "/news",
    src: "contact.png",
  },

  {
    title: "聯絡我們",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: true,
    index: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 當組件掛載時，設置 isOpen 為 true
    setIsOpen(true);
  }, []);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            isOpen={isOpen}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
          alt=""
        />
      </div>
    </motion.div>
  );
}
