"use strict";
const btn = document.querySelectorAll(".show-modal");
const showModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

btn.forEach((element) => {
  element.addEventListener("click", () => {
    showModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
closeModal.addEventListener("click", () => {
  showModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
