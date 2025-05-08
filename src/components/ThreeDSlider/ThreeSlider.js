"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./shaders";
import { slides } from "./slides";
import GsapText from "../../components/RevealText/index";

export default function ThreeSlider() {
  const containerRef = useRef(null);
  const projectLinkRef = useRef(null);
  const [titleText, setTitleText] = useState(slides[0].title);
  const [currentUrl, setCurrentUrl] = useState(slides[0].url);
  const [titleVisible, setTitleVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { clientWidth, clientHeight } = container;

    let scrollIntensity = 0;
    let targetScrollIntensity = 0;
    const maxScrollIntensity = 1.0;
    const scrollSmoothness = 0.5;

    let scrollPosition = 0;
    let targetScrollPosition = 0;
    const scrollPositionSmoothness = 0.05;

    let isMoving = false;
    const movementThreshold = 0.001;
    let isSnapping = false;

    let stableCurrentIndex = 0;
    let stableNextIndex = 1;
    let isStable = false;
    let currentProjectIndex = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);

    const calculatePlaneDimensions = () => {
      const fov = camera.fov * (Math.PI / 180);
      const viewportHeight = 2 * Math.tan(fov / 2) * camera.position.z;
      const viewportWidth = viewportHeight * camera.aspect;

      const widthFactor = 0.8;
      const planeWidth = viewportWidth * widthFactor;
      const planeHeight = planeWidth * (9 / 16);

      return { width: planeWidth, height: planeHeight };
    };

    const dimensions = calculatePlaneDimensions();

    const textureLoader = new THREE.TextureLoader();
    const textures = slides.map((slide) => {
      const texture = textureLoader.load(slide.image);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return texture;
    });

    const geometry = new THREE.PlaneGeometry(
      dimensions.width,
      dimensions.height,
      32,
      32
    );

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uScrollIntensity: { value: scrollIntensity },
        uScrollPosition: { value: scrollPosition },
        uCurrentTexture: { value: textures[0] },
        uNextTexture: { value: textures[1] },
      },
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    function determineTextureIndices(position) {
      const totalImages = slides.length;
      const baseIndex = Math.floor(position % totalImages);
      const positiveBaseIndex =
        baseIndex >= 0 ? baseIndex : (totalImages + baseIndex) % totalImages;
      const nextIndex = (positiveBaseIndex + 1) % totalImages;

      let normalizedPosition = position % 1;
      if (normalizedPosition < 0) normalizedPosition += 1;

      return {
        currentIndex: positiveBaseIndex,
        nextIndex: nextIndex,
        normalizedPosition,
      };
    }

    function updateTextureIndices() {
      if (isStable) {
        material.uniforms.uCurrentTexture.value = textures[stableCurrentIndex];
        material.uniforms.uNextTexture.value = textures[stableNextIndex];
        return;
      }

      const indices = determineTextureIndices(scrollPosition);
      material.uniforms.uCurrentTexture.value = textures[indices.currentIndex];
      material.uniforms.uNextTexture.value = textures[indices.nextIndex];
    }

    function snapToNearestImage() {
      if (!isSnapping) {
        isSnapping = true;
        const roundedPosition = Math.round(scrollPosition);
        targetScrollPosition = roundedPosition;

        const indices = determineTextureIndices(roundedPosition);
        stableCurrentIndex = indices.currentIndex;
        stableNextIndex = indices.nextIndex;
        currentProjectIndex = indices.currentIndex;

        setTitleVisible(false);
        setTimeout(() => {
          setTitleText(slides[currentProjectIndex].title);
          setCurrentUrl(slides[currentProjectIndex].url);
          setTitleVisible(true);
        }, 400);
      }
    }

    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;

      const { clientWidth, clientHeight } = container;

      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const newDimensions = calculatePlaneDimensions();
      plane.geometry.dispose();
      plane.geometry = new THREE.PlaneGeometry(
        newDimensions.width,
        newDimensions.height,
        32,
        32
      );
    };

    const handleWheel = (event) => {
      event.preventDefault();
      isSnapping = false;
      isStable = false;

      targetScrollIntensity += event.deltaY * 0.001;
      targetScrollIntensity = Math.max(
        -maxScrollIntensity,
        Math.min(maxScrollIntensity, targetScrollIntensity)
      );

      targetScrollPosition += event.deltaY * 0.001;
      isMoving = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel, { passive: false });

    const autoSlideInterval = setInterval(() => {
      if (!isMoving && !isSnapping) {
        isStable = false;
        isSnapping = false;
        targetScrollPosition += 1;
        isMoving = true;
      }
    }, 8000);

    function animate() {
      requestAnimationFrame(animate);

      scrollIntensity +=
        (targetScrollIntensity - scrollIntensity) * scrollSmoothness;
      material.uniforms.uScrollIntensity.value = scrollIntensity;

      scrollPosition +=
        (targetScrollPosition - scrollPosition) * scrollPositionSmoothness;

      let normalizedPosition = scrollPosition % 1;
      if (normalizedPosition < 0) normalizedPosition += 1;

      material.uniforms.uScrollPosition.value = isStable ? 0 : normalizedPosition;

      updateTextureIndices();

      const baseScale = 1.0;
      const scaleIntensity = 0.1;
      const scale =
        scrollIntensity > 0
          ? baseScale + scrollIntensity * scaleIntensity
          : baseScale - Math.abs(scrollIntensity) * scaleIntensity;
      plane.scale.set(scale, scale, 1);

      targetScrollIntensity *= 0.98;

      const scrollDelta = Math.abs(targetScrollPosition - scrollPosition);

      if (scrollDelta < movementThreshold) {
        if (isMoving && !isSnapping) snapToNearestImage();

        if (scrollDelta < 0.0001) {
          if (!isStable) {
            isStable = true;
            scrollPosition = Math.round(scrollPosition);
            targetScrollPosition = scrollPosition;
          }

          isMoving = false;
          isSnapping = false;
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      clearInterval(autoSlideInterval);

      geometry.dispose();
      material.dispose();
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();

      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
   <div
  ref={containerRef}
  className="relative w-full overflow-hidden h-[min(80vh,100vw)] sm:h-[85vh] lg:h-screen max-h-[100vh]"
>
  <div
    className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
      titleVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    <a
      href={currentUrl}
      className="hidden sm:block text-center px-4"
      ref={projectLinkRef}
    >
      <GsapText
        key={titleText}
        id="project-title"
        text={titleText}
        className="!text-white text-[clamp(1.25rem,3vw,2.5rem)] font-normal drop-shadow-lg"
      />
    </a>
  </div>
</div>

  );
}
