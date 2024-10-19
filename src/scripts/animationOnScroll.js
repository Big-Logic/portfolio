function observerCallback(entries, classToAdd) {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(classToAdd);
    } else {
      entry.target.classList.remove(classToAdd);
    }
  });
}

export function animationOnScroll(domNodes, initialClass, classToAdd) {
  domNodes.forEach((domNode) => {
    domNode.classList.add(initialClass);
    // observer.observe(domNode);
  });
  const options = {
    root: null,
    rootMargin: "0px",
  };
  const observer = new IntersectionObserver((entries) => {
    observerCallback(entries, classToAdd);
  }, options);

  domNodes.forEach((domNode) => {
    // domNode.classList.add(initialClass);
    observer.observe(domNode);
  });
}

animationOnScroll(
  document.querySelectorAll(".projects-item"),
  "zoom-out-default",
  "zoom-out-complete"
);
