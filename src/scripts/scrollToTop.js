const heroSection = document.querySelector(".hero");
const scrollToTopBtn = document.querySelector(".scroll-to-top__btn");

function displayBtn() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      scrollToTopBtn.style.display = "none";
    } else {
      scrollToTopBtn.style.display = "inline-block";
    }
  }, options);

  observer.observe(heroSection);
}

function scrollToTop() {
  scrollToTopBtn.addEventListener("click", () => {
    heroSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}

displayBtn();
scrollToTop();
