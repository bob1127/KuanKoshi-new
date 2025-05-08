"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedLink from "../AnimatedLink";

import { usePathname } from "next/navigation"; // 監聽當前路徑變化
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import Image from "next/image";
export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname(); // 取得當前的路由路徑
  const [selectedLink, setSelectedLink] = useState({
    isActive: true,
    index: 0,
  });
  // 當 pathname 改變時，自動關閉 Nav
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <div className=" flex justify-start ">
          <AnimatedLink href="/home" legacyBehavior>
            <a className="font-bold">
              <div className="h-full flex justify-center items-center">
                <Image
                  src="/images/yiyuan-logo.png"
                  alt="logo"
                  placeholder="empty"
                  loading="lazy"
                  className="w-[85px] sm:w-[100px] xl:w-[130px]"
                  width={75}
                  height={35}
                />
              </div>
            </a>
          </AnimatedLink>
        </div>

        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      {isActive && (
        <motion.div
          variants={background}
          initial="initial"
          animate="open"
          exit="closed"
          className={styles.background}
        ></motion.div>
      )}
    </div>
  );
}
