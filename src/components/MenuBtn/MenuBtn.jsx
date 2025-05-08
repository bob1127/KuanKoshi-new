"use client";
import React, { useEffect, useRef } from "react";
import "./MenuBtn.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MenuBtn = ({ isOpen, toggleMenu }) => {
  const container = useRef();
  const menuBtnOpen = useRef(null);
  const menuBtnClose = useRef(null);

  useGSAP(
    () => {
      gsap.to(menuBtnOpen.current, {
        y: isOpen ? -24 : 0,
        duration: 1,
        delay: 0.75,
        ease: "power2.out",
      });
      gsap.to(menuBtnClose.current, {
        y: isOpen ? 0 : 24,
        duration: 1,
        delay: 0.75,
        ease: "power2.out",
      });
    },
    [isOpen],
    { scope: container }
  );

  return (
    <div
      ref={container}
      className={`menu-toggle  ${isOpen ? "opened" : "closed"}`}
      onClick={toggleMenu}
    >
      <div className="menu-copy  2xl:mt-1">
        <p id="menu-open" ref={menuBtnOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="45"
            height="45"
            viewBox="0 0 100 100"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </p>
        <p id="menu-text" ref={menuBtnClose}>
          Close
        </p>
      </div>
    </div>
  );
};

export default MenuBtn;
