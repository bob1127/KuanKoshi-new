"use client";
import { useEffect } from "react";
import "./page.css"; // 確保你的 CSS 檔案正確引入

const Minimap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/mini.js"; // 確保 minimap.js 在 public 目錄下
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 組件卸載時清理
    };
  }, []);

  return (
    <div className="container w-[100vw]">
      <div className="site-info w-[20%]">
        <div className="innwe-wrap bg-[#fff] rounded-2xl p-8 flex flex-col justify-center items-center">
          <h2>TITLE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            quod iste est aliquam officia illo perferendis veritatis eaque
            omnis! Harum deleniti officiis, veritatis molestias quidem modi
            quibusdam quo optio architecto.
          </p>
        </div>
      </div>

      <div className=" !w-full sm:!w-[60%] img-preview border border-black !h-[110vh] !mt-[10vh]">
        {/* <div className="innwe-wrap bg-[#fff] rounded-2xl p-8 flex flex-col justify-center items-center">
          <h2>TITLE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            quod iste est aliquam officia illo perferendis veritatis eaque
            omnis! Harum deleniti officiis, veritatis molestias quidem modi
            quibusdam quo optio architecto.
          </p>
        </div> */}
        <img src="./assets/img1.jpeg" alt="Preview" />
      </div>

      <div className="minimap  border border-green-500">
        <div className="indicator"></div>
        <div className="items">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="item">
              <img
                src={`./assets/img${i + 1}.jpeg`}
                alt={`Thumbnail ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minimap;
