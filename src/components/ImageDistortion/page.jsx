"use client";
import { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import {
  Renderer,
  Vec2,
  Vec4,
  Geometry,
  Texture,
  Program,
  Mesh,
  Flowmap,
} from "../../../src/index";
import "./page.css";
import { BoxReveal } from "../../../src/components/magicui/box-reveal";

const ImageDistortion = () => {
  useEffect(() => {
    // 初始化 Lenis 平滑滾動
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 載入 Shader
    const loadShader = async (url) => {
      const response = await fetch(url);
      return response.text();
    };

    const initWebGL = async () => {
      const vertexShader = await loadShader("/shaders/vertexShader.glsl");
      const fragmentShader = await loadShader("/shaders/fragmentShader.glsl");

      const _size = [2048, 1638];

      document.querySelectorAll(".img").forEach((imgElement) => {
        const renderer = new Renderer({ dpr: 2 });
        const gl = renderer.gl;
        const canvas = document.createElement("canvas");
        imgElement.appendChild(canvas);
        imgElement.appendChild(gl.canvas);

        let aspect = 1;
        const mouse = new Vec2(-1);
        const velocity = new Vec2();

        function resize() {
          const rect = imgElement.getBoundingClientRect();
          gl.canvas.width = rect.width * 2.0;
          gl.canvas.height = rect.height * 2.0;
          gl.canvas.style.width = `${rect.width}px`;
          gl.canvas.style.height = `${rect.height}px`;

          const imageAspect = _size[0] / _size[1];
          const canvasAspect = rect.width / rect.height;
          let a1, a2;
          if (canvasAspect > imageAspect) {
            a1 = imageAspect / canvasAspect;
            a2 = 1.0;
          } else {
            a1 = 1.0;
            a2 = canvasAspect / imageAspect;
          }

          mesh.program.uniforms.res.value = new Vec4(
            rect.width,
            rect.height,
            a1,
            a2
          );
          renderer.setSize(rect.width, rect.height);
          aspect = rect.width / rect.height;
        }

        const flowmap = new Flowmap(gl, {
          falloff: 0.3,
          dissipation: 0.92,
          alpha: 0.5,
        });

        const geometry = new Geometry(gl, {
          position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3]),
          },
          uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        });

        const texture = new Texture(gl, {
          minFilter: gl.LINEAR,
          magFilter: gl.LINEAR,
        });
        texture.image = imgElement.querySelector("img");

        const program = new Program(gl, {
          vertex: vertexShader,
          fragment: fragmentShader,
          uniforms: {
            uTime: { value: 0 },
            tWater: { value: texture },
            res: {
              value: new Vec4(window.innerWidth, window.innerHeight, 1, 1),
            },
            tFlow: flowmap.uniform,
          },
        });

        const mesh = new Mesh(gl, { geometry, program });

        window.addEventListener("resize", resize, false);
        resize();

        const isTouchCapable = "ontouchstart" in window;
        if (isTouchCapable) {
          imgElement.addEventListener("touchstart", updateMouse, false);
          imgElement.addEventListener("touchmove", updateMouse, {
            passive: false,
          });
        } else {
          imgElement.addEventListener("mousemove", updateMouse, false);
        }

        let lastTime;
        const lastMouse = new Vec2();

        function updateMouse(e) {
          e.preventDefault();

          const rect = imgElement.getBoundingClientRect();
          let x, y;

          if (e.changedTouches && e.changedTouches.length) {
            x = e.changedTouches[0].pageX - rect.left;
            y = e.changedTouches[0].pageY - rect.top;
          } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
          }

          mouse.set(x / rect.width, 1.0 - y / rect.height);

          if (!lastTime) {
            lastTime = performance.now();
            lastMouse.set(x, y);
          }

          const deltaX = x - lastMouse.x;
          const deltaY = y - lastMouse.y;

          lastMouse.set(x, y);

          const time = performance.now();
          const delta = Math.max(10.4, time - lastTime);
          lastTime = time;
          velocity.x = deltaX / delta;
          velocity.y = deltaY / delta;
          velocity.needsUpdate = true;
        }

        function update(t) {
          requestAnimationFrame(update);

          if (!velocity.needsUpdate) {
            mouse.set(-1);
            velocity.set(0);
          }
          velocity.needsUpdate = false;

          flowmap.mouse.copy(mouse);
          flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
          flowmap.update();

          program.uniforms.uTime.value = t * 0.01;
          renderer.render({ scene: mesh });
        }

        requestAnimationFrame(update);
      });
    };

    initWebGL();
  }, []);

  return (
    <div className="container">
      <div className=" flex flex-col w-[70%] mx-auto justify-start items-start">
        <h1>Design</h1>
        <p>設計一隅</p>
      </div>

      {[1, 2].map((num) => (
        <div className="row flex flex-col lg:flex-row" key={num}>
          <div className="img w-full lg:w-[65%] " data-aos="fade-up">
            <Image
              src={`/assets/img${num}.png`}
              alt={`Image ${num}`}
              width={1500}
              height={1500}
              className=""
            />
          </div>
          <div className="size-full w-full lg:w-[35%] pl-5  items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#9ea849"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Magic UI<span className="">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#9ea849"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                UI library for <span className="">Design Engineers</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#9ea849"} duration={0.5}>
              <div className="mt-6">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold ">React</span>,
                  <span className="font-semibold ">Typescript</span>,
                  <span className="font-semibold ">Tailwind CSS</span>, and
                  <span className="font-semibold ">Motion</span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDistortion;
