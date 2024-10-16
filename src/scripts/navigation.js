const mainHeaderLinksCloseDiv = document.querySelector(
  ".main-header__links--closediv"
);
const mainHeaderLinks = document.querySelector(".main-header__links");
const mainHeaderLinksOpenButton = document.querySelector(
  ".main-header__links--openbtn"
);
const mainHeaderLinksCloseButton = document.querySelector(
  ".main-header__links--closebtn"
);

// Handles the opening and closing of the navbar on device with max width 998
function handleNavLinksToggle(action) {
  if (
    !action ||
    (action.toLowerCase() !== "open" && action.toLowerCase() !== "close")
  ) {
    throw new Error(
      "action must be of type string and contain one of these values. [open, close]"
    );
  }
  const lowerCaseAction = action.toLowerCase();
  if (lowerCaseAction === "open") {
    mainHeaderLinksCloseDiv.classList.add("show-nav");
    mainHeaderLinks.classList.add("show-links");
  } else if (lowerCaseAction === "close") {
    mainHeaderLinksCloseDiv.classList.remove("show-nav");
    mainHeaderLinks.classList.remove("show-links");
  }
}

mainHeaderLinksOpenButton.addEventListener("click", () => {
  handleNavLinksToggle("open");
});

mainHeaderLinksCloseButton.addEventListener("click", () => {
  handleNavLinksToggle("close");
});

mainHeaderLinksCloseDiv.addEventListener("click", () => {
  handleNavLinksToggle("close");
});

export function styleActiveLink() {
  const links = document.querySelectorAll(".page-link");
  const currantPath = location.pathname;

  links.forEach((link) => {
    const linkPathname = link.pathname;
    if (linkPathname === currantPath) {
      link.classList.add("active-link");
    }
  });
}

styleActiveLink();
