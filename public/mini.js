const container = document.querySelector(".container");
const items = document.querySelector(".items");
const indicator = document.querySelector(".indicator");
const itemElements = document.querySelectorAll(".item");
const previewImage = document.querySelector(".img-preview img");
const itemImages = document.querySelectorAll(".item img");

let isHorizontal = window.innerWidth <= 900;
let dimensions = {
  itemSize: 0,
  containerSize: 0,
  indicatorSize: 0,
};

let maxTranslate = 0;
let currentTranslate = 0;
let targetTranslate = 0;
let isClickMove = false;
let currentImageIndex = 0;
const activeItemOpacity = 0.3;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateDimensions() {
  isHorizontal = window.innerWidth <= 900;
  if (isHorizontal) {
    dimensions = {
      itemSize: itemElements[0].getBoundingClientRect().width,
      containerSize: items.scrollWidth,
      indicatorSize: indicator.getBoundingClientRect().width,
    };
  } else {
    dimensions = {
      itemSize: itemElements[0].getBoundingClientRect().height,
      containerSize: items.getBoundingClientRect().height,
      indicatorSize: indicator.getBoundingClientRect().height,
    };
  }
  return dimensions;
}

dimensions = updateDimensions();
maxTranslate = dimensions.containerSize - dimensions.indicatorSize;

function getItemInIndicator() {
  itemImages.forEach((img) => (img.style.opacity = "1"));

  const indicatorStart = -currentTranslate;
  const indicatorEnd = indicatorStart + dimensions.indicatorSize;

  let maxOverlap = 0;
  let selectedIndex = 0;

  itemElements.forEach((item, index) => {
    const itemStart = index * dimensions.itemSize;
    const itemEnd = itemStart + dimensions.itemSize;

    const overlapStart = Math.max(indicatorStart, itemStart);
    const overlapEnd = Math.min(indicatorEnd, itemEnd);
    const overlap = Math.max(0, overlapEnd - overlapStart);

    if (overlap > maxOverlap) {
      maxOverlap = overlap;
      selectedIndex = index;
    }
  });

  itemImages[selectedIndex].style.opacity = activeItemOpacity;
  return selectedIndex;
}

function updatePreviewImage(index) {
  if (currentImageIndex !== index) {
    currentImageIndex = index;
    const targetItem = itemElements[index].querySelector("img");
    const targetSrc = targetItem.getAttribute("src");
    previewImage.setAttribute("src", targetSrc);
  }
}

function animate() {
  const lerpFactor = isClickMove ? 0.05 : 0.075;
  currentTranslate = lerp(currentTranslate, targetTranslate, lerpFactor);

  if (Math.abs(currentTranslate - targetTranslate) > 0.01) {
    const transform = isHorizontal
      ? `translateX(${currentTranslate}px)`
      : `translateY(${currentTranslate}px)`;
    items.style.transform = transform;

    const activeIndex = getItemInIndicator();
    updatePreviewImage(activeIndex);
  } else {
    isClickMove = false;
  }

  requestAnimationFrame(animate);
}

container.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    isClickMove = false;

    let delta;
    delta = e.deltaY;

    const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

    targetTranslate = Math.min(
      Math.max(targetTranslate - scrollVelocity, -maxTranslate),
      0
    );
  },
  { passive: false }
);

let touchStartY = 0;
container.addEventListener("touchstart", (e) => {
  if (isHorizontal) {
    touchStartY = e.touches[0].clientY;
  }
});

container.addEventListener(
  "touchmove",
  (e) => {
    if (isHorizontal) {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      const delta = deltaY;
      const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

      targetTranslate = Math.min(
        Math.max(targetTranslate - scrollVelocity, -maxTranslate),
        0
      );

      touchStartY = touchY;
      e.preventDefault();
    }
  },
  { passive: false }
);

itemElements.forEach((item, index) => {
  item.addEventListener("click", () => {
    isClickMove = true;
    targetTranslate =
      -index * dimensions.itemSize +
      (dimensions.indicatorSize - dimensions.itemSize) / 2;

    targetTranslate = Math.max(Math.min(targetTranslate, 0), -maxTranslate);
  });
});

window.addEventListener("resize", () => {
  dimensions = updateDimensions();
  const newMaxTranslate = dimensions.containerSize - dimensions.indicatorSize;

  targetTranslate = Math.min(Math.max(targetTranslate, -newMaxTranslate), 0);
  currentTranslate = targetTranslate;

  const transform = isHorizontal
    ? `translateX(${currentTranslate}px)`
    : `translateY(${currentTranslate}px)`;
  items.style.transform = transform;
});

itemImages[0].style.opacity = activeItemOpacity;
updatePreviewImage(0);
animate();
