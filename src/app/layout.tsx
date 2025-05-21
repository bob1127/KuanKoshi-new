"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import Head from "next/head";
import LenisWrapper from "../components/LenisWrapper";
import AnimatedLink from "../components/AnimatedLink";
import Link from "next/link";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer1";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";

// ✅ 匯入延遲載入 GTM 元件
import GTMDeferred from "../components/GTMDeferred";

interface RootLayoutProps {
  children: React.ReactNode;
}

type BackdropType = "blur" | "opaque";

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isDarkBg, setIsDarkBg] = useState(false);
  const [backdrop, setBackdrop] = useState<BackdropType>("opaque");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (backdrop: BackdropType) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <ViewTransitions>
      <Head>
        <title>寬越設計｜商業空間與住宅設計</title>
        <meta
          name="description"
          content="寬越設計專注於舊屋翻新、住宅裝修與商業空間的室內設計整合服務。"
        />
        <link
          rel="icon"
          href="https://www.kuankoshi.com/images/logo/company-logo.ico"
        />
      </Head>

      <html lang="zh-Hant">
        <body>
          <LenisWrapper enable={true}>
            {/* ✅ 使用懶載入的 GTM 元件 */}
            <GTMDeferred />

            <motion.div className="line-contact-bar fixed sm:hidden bottom-10 right-5 z-[999999999]">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <Link
                    target="_blank"
                    href="https://www.100.com.tw/11283"
                    aria-label="前往 100 官方網站"
                  >
                    <div className="bg-black py-1 px-2 rounded-[8px] text-white flex justify-center text-[.8rem] font-bold items-center">
                      100
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61550958051323"
                    aria-label="前往 Facebook 粉絲頁"
                  >
                    <svg
                      className="w-9 h-9 border border-black rounded-full flex justify-center items-center text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex mt-3 flex-col items-center">
                  <Link
                    target="_blank"
                    href="https://line.me/ti/p/5vNeu3b_5f"
                    aria-label="加入 LINE 好友"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 導覽 */}
            <div className="w-[100vw] z-[999999999999999] left-0 top-0 fixed">
              <Menu isDarkBg={isDarkBg} />
            </div>

            <main> {children}</main>

            <section>
              <Footer />
            </section>
          </LenisWrapper>
        </body>
      </html>
    </ViewTransitions>
  );
}
