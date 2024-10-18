function observerCallback(entries, thresholds, domNode, classToAdd) {
  const entry = entries[0];
  const intersectionRatio = entry.intersectionRatio;
  if (entry.isIntersecting) {
  } else {
  }
}

export function animationOnScroll(domNode, classToAdd) {
  const thresholds = [0.2, 0.6, 1.0];
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: thresholds,
  };
  const observer = new IntersectionObserver((entries) => {
    observerCallback(entries, thresholds, domNode, classToAdd);
  }, options);

  observer.observe(domNode);
}

animationOnScroll(
  document.querySelector(".projects-item"),
  "show-project-item"
);
