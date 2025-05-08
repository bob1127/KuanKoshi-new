"use client";

import { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Image from "next/image";

import { BsCart, BsArrowRight } from "react-icons/bs";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },

        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
          },

          index * 1 + 1
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 1,
      },

      "<"
    );

    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () =>
        gsap.to(".divider", {
          opacity: 0,
          duration: 0.3,
          delay: 0.3,
        }),
    });

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-100%",
        duration: 1,
      },

      "<"
    );

    tl.to(
      ".block",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        onStart: () =>
          gsap.to(".hero-img", {
            scale: 1,
            duration: 2,
            ease: "hop",
          }),
      },

      "<"
    );

    tl.to(
      [".nav", ".line h1", ".line p"],
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.2,
      },

      "<"
    );

    tl.to(
      [".cta", ".cta-icon"],
      {
        scale: 1,
        duration: 1.5,
        stagger: 0.75,
        delay: 0.75,
      },

      "<"
    );

    tl.to(
      ".cta-label p",
      {
        y: "0%",
        duration: 1.5,
        delay: 0.5,
      },

      "<"
    );
  });

  return (
    <>
      {" "}
      <div className="loader">
        {" "}
        <div className="overlay">
          {" "}
          <div className="block"></div> <div className="block"></div>{" "}
        </div>{" "}
        <div className="intro-logo">
          {" "}
          <div className="word" id="word-1">
            {" "}
            <h1>
              {" "}
              <span>Kind</span>{" "}
            </h1>{" "}
          </div>{" "}
          <div className="word" id="word-2">
            {" "}
            <h1>Root</h1>{" "}
          </div>{" "}
        </div>{" "}
        <div className="divider"></div>{" "}
        <div className="spinner-container">
          {" "}
          <div className="spinner"></div>{" "}
        </div>{" "}
        <div className="counter">
          {" "}
          <div className="count">
            {" "}
            <div className="digit">
              {" "}
              <h1>0</h1>{" "}
            </div>{" "}
            <div className="digit">
              {" "}
              <h1>0</h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="count">
            {" "}
            <div className="digit">
              {" "}
              <h1>2</h1>{" "}
            </div>{" "}
            <div className="digit">
              {" "}
              <h1>7</h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="count">
            {" "}
            <div className="digit">
              {" "}
              <h1>6</h1>{" "}
            </div>{" "}
            <div className="digit">
              {" "}
              <h1>5</h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="count">
            {" "}
            <div className="digit">
              {" "}
              <h1>9</h1>{" "}
            </div>{" "}
            <div className="digit">
              {" "}
              <h1>8</h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="count">
            {" "}
            <div className="digit">
              {" "}
              <h1>9</h1>{" "}
            </div>{" "}
            <div className="digit">
              {" "}
              <h1>9</h1>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container">
        {" "}
        <div className="hero-img">
          {" "}
          <Image
            src="/hero-img.jpg"
            alt="KindRoot Hero Image"
            fill
            priority
          />{" "}
        </div>{" "}
        <div className="nav">
          {" "}
          <div className="logo">
            {" "}
            <a href="#">KindRoot</a>{" "}
          </div>{" "}
          <div className="nav-links">
            {" "}
            <a href="#">Rituals</a> <a href="#">Our Roots</a>{" "}
            <a href="#">Lookbook</a> <a href="#">Stories</a>{" "}
          </div>{" "}
          <div className="btn">
            {" "}
            <a href="#">
              {" "}
              <BsCart size={20} />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="header">
          {" "}
          <div className="hero-copy">
            {" "}
            <div className="line">
              {" "}
              <h1>
                {" "}
                <span>Rooted</span> in care,
              </h1>{" "}
            </div>{" "}
            <div className="line">
              {" "}
              <h1>
                {" "}
                grown with <span>kindness</span>{" "}
              </h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="line">
            {" "}
            <p>Skincare that stays true to nature and to you</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="cta">
          {" "}
          <div className="cta-label">
            {" "}
            <p>View all products</p>{" "}
          </div>{" "}
          <div className="cta-icon">
            {" "}
            <BsArrowRight size={20} />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
