"use strict";

// Get the button and the html element
const themeButton = document.querySelector(".theme_btn");
const html = document.querySelector("html");

// Listen for button clicks
themeButton.addEventListener("click", () => {
  // Toggle the data-theme attribute of the html element between "light" and "dark"
  html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "light" ? "dark" : "light"
  );
});
