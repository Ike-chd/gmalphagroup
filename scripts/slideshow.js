let bgIndex = 0;
const bgSlides = document.getElementsByClassName("bg-slide");

function showBgSlides() {
  for (let i = 0; i < bgSlides.length; i++) {
    bgSlides[i].style.opacity = "0";
  }
  bgIndex++;
  if (bgIndex > bgSlides.length) bgIndex = 1;
  bgSlides[bgIndex - 1].style.opacity = "1";
  setTimeout(showBgSlides, 4000);
}

document.addEventListener("DOMContentLoaded", showBgSlides);