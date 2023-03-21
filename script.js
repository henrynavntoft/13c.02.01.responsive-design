"use strict";

// get the button and the html element
const themeButton = document.querySelector(".theme_btn");
const html = document.querySelector("html");

// listen for button clicks
themeButton.addEventListener("click", () => {
  // toggle the data-theme attribute of the html element
  if (html.getAttribute("data-theme") === "light") {
    html.setAttribute("data-theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
  }
});
