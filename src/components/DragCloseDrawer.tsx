import React, { useState } from "react";

type DragCloseDrawerProps = {
  trigger: (props: { onClick: () => void }) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const DragCloseDrawer = ({
  trigger,
  children,
  className,
}: DragCloseDrawerProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {trigger({ onClick: () => setOpen(true) })}

      {/* Backdrop */}
      <div
        className={`!fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div
        className={`!fixed top-0 right-0 z-50 border-l-2 border-black border-t-2 h-full w-full md:w-3/4 shadow-xl transform transition-transform duration-300 ease-in-out
  bg-[linear-gradient(to_bottom,_#5b8b5a_0%,_#5b8b5a_30%,_#fefefe_30%,_#fefefe_100%)]
  ${open ? "translate-x-0" : "translate-x-full"} ${className || ""}`}
      >
        {/* flex-col 容器，拉撐高度 */}
        <div className="relative flex w-full flex-col h-full">
          {/* 左側裝飾條 */}
          <div className="left-bar absolute left-0 top-0 z-50 h-screen border-r-2 bg-white border-black w-[6%]">
            {/* 關閉按鈕 - X 標誌 */}

            <button
              onClick={handleClose}
              className="text-black text-2xl close-button border-b-2 border-black top h-[10%] w-full flex items-start justify-center  pt-4 hover:text-white hover:bg-black transition-colors duration-200"
              aria-label="關閉"
            >
              ✕
            </button>

            {/* 垂直文字區 */}
            <div className="rotate-[-90deg] flex items-center justify-center h-[70%]">
              <b className="text-[1.45rem] font-bold tracking-widest">
                YIYUANPROJECT
              </b>
            </div>
          </div>

          <div className="flex justify-end p-4 border-b border-black z-10"></div>

          <div className="flex-1  overflow-y-auto w-full h-full px-6 pt-2 pb-6 z-0">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
