"use strict";
const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function (trigger) {
  trigger.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  btnShowModal.forEach((element) => {
    element.addEventListener("click", showModal);
  });
};
closeModal(overlay);
closeModal(btnCloseModal);
