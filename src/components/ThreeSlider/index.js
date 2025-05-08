"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./shaders";
import { slides } from "./slides";
import styles from './style.module.scss';

export default function ThreeSlider() {
  const containerRef = useRef(null);
  const projectTitleRef = useRef(null);
  const projectLinkRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

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

    let titleHidden = false;
    let titleAnimating = false;
    let currentProjectIndex = 0;

    projectTitleRef.current.textContent = slides[0].title;
    projectLinkRef.current.href = slides[0].url;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    containerRef.current.appendChild(renderer.domElement);

    const calculatePlaneDimensions = () => {
      const fov = camera.fov * (Math.PI / 180);
      const viewportHeight = 2 * Math.tan(fov / 2) * camera.position.z;
      const viewportWidth = viewportHeight * camera.aspect;

      const widthFactor = window.innerWidth < 900 ? 0.9 : 0.5;
      const planeWidth = viewportWidth * widthFactor;
      const planeHeight = planeWidth * (9 / 16);

      return { width: planeWidth, height: planeHeight };
    };

    const dimensions = calculatePlaneDimensions();

    const loadTextures = () => {
      const textureLoader = new THREE.TextureLoader();

      return slides.map((slide) => {
        const texture = textureLoader.load(
          slide.image,
          undefined,
          undefined,
          () => {
            console.log(`Using fallback for ${slide.image}`);
          }
        );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        return texture;
      });
    };

    const textures = loadTextures();

    function preloadAllTextures() {
      textures.forEach((texture) => {
        texture.needsUpdate = true;
      });
    }

    preloadAllTextures();

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
        normalizedPosition: normalizedPosition,
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

        showTitle();
      }
    }

    function hideTitle() {
      if (!titleHidden && !titleAnimating && projectTitleRef.current) {
        titleAnimating = true;
        projectTitleRef.current.style.transform = "translateY(20px)";

        setTimeout(() => {
          titleAnimating = false;
          titleHidden = true;
        }, 500);
      }
    }

    function showTitle() {
      if (
        titleHidden &&
        !titleAnimating &&
        projectTitleRef.current &&
        projectLinkRef.current
      ) {
        projectTitleRef.current.textContent = slides[currentProjectIndex].title;
        projectLinkRef.current.href = slides[currentProjectIndex].url;

        titleAnimating = true;
        projectTitleRef.current.style.transform = "translateY(0px)";

        setTimeout(() => {
          titleAnimating = false;
          titleHidden = false;
        }, 500);
      }
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
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

      hideTitle();

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

    function animate() {
      const animationId = requestAnimationFrame(animate);

      scrollIntensity +=
        (targetScrollIntensity - scrollIntensity) * scrollSmoothness;
      material.uniforms.uScrollIntensity.value = scrollIntensity;

      scrollPosition +=
        (targetScrollPosition - scrollPosition) * scrollPositionSmoothness;

      let normalizedPosition = scrollPosition % 1;
      if (normalizedPosition < 0) normalizedPosition += 1;

      if (isStable) {
        material.uniforms.uScrollPosition.value = 0;
      } else {
        material.uniforms.uScrollPosition.value = normalizedPosition;
      }

      updateTextureIndices();

      const baseScale = 1.0;
      const scaleIntensity = 0.1;

      if (scrollIntensity > 0) {
        const scale = baseScale + scrollIntensity * scaleIntensity;
        plane.scale.set(scale, scale, 1);
      } else {
        const scale = baseScale - Math.abs(scrollIntensity) * scaleIntensity;
        plane.scale.set(scale, scale, 1);
      }

      targetScrollIntensity *= 0.98;

      const scrollDelta = Math.abs(targetScrollPosition - scrollPosition);

      if (scrollDelta < movementThreshold) {
        if (isMoving && !isSnapping) {
          snapToNearestImage();
        }

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

    const animationId = requestAnimationFrame(animate);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationId);

      geometry.dispose();
      material.dispose();
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();

      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.projectTitleContainer}>
        <a href="#" id="project-link" ref={projectLinkRef}>
          <div className={styles.projectTitleMask}>
            <p id="project-title" ref={projectTitleRef}>
              Title 1
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
