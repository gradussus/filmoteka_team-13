var refs={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};function onEscapeClick(e){"Escape"===e.code&&(refs.modal.classList.add("is-hidden"),document.removeEventListener("keydown",onEscapeClick),document.removeEventListener("click",onBackdropClick))}function onBackdropClick(e){e.target===refs.modal&&(refs.modal.classList.add("is-hidden"),document.removeEventListener("click",onBackdropClick),document.removeEventListener("keydown",onEscapeClick))}refs.openFooterModalBtn.addEventListener("click",(function(e){e.preventDefault(),refs.modal.classList.remove("is-hidden"),document.addEventListener("keydown",onEscapeClick),document.addEventListener("click",onBackdropClick)})),refs.closeBtn.addEventListener("click",(function(e){e.preventDefault(),refs.modal.classList.add("is-hidden"),document.removeEventListener("keydown",onEscapeClick),document.removeEventListener("click",onBackdropClick)}));
//# sourceMappingURL=library.6e23082f.js.map