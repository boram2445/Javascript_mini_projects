"use strict";

export default class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalBtn = document.querySelector(".modal-btn");
    this.modalBtn.addEventListener("click", () => {
      this.close();
      this.onClick && this.onClick();
    });
  }

  setOnClick(onClick) {
    this.onClick = onClick;
  }

  open(modalText) {
    this.modal.style.display = "block";
    this.modal.lastElementChild.textContent = modalText;
  }

  close() {
    this.modal.style.display = "none";
  }
}
