document.addEventListener("DOMContentLoaded", () => {
  // Lazyload init
  lazyload();
  // AOS init
  AOS.init({
    duration: 700,
    anchorPlacement: "center-bottom",
  });
  // Parallax init
  let image = document.querySelectorAll(".parallax");
  new simpleParallax(image, {
    scale: 1.2,
    orientation: "right",
  });
  // Inputmask init
  Inputmask().mask(document.querySelectorAll(".input[name='phone']"));

  let body = document.body;
  let tabListArr = document.querySelectorAll(".tab-list");
  let callbackBtnOpenArr = document.querySelectorAll(".js-callback-btn-open");
  let callbackBtnCloseArr = document.querySelectorAll(".js-callback-btn-close");
  let callbackPopup = document.querySelector(".callback-popup");

  tabListArr.forEach((element) => {
    element.addEventListener("click", tabHandler);
  });

  callbackBtnOpenArr.forEach((element) => {
    element.addEventListener("click", popupCallbackHandler);
  });
  callbackBtnCloseArr.forEach((element) => {
    element.addEventListener("click", popupCallbackHandler);
  });

  // Tab handler
  function tabHandler(e) {
    let tabItemArr = this.querySelectorAll(".tab-item");
    let paneList = this.nextElementSibling;
    let paneItemArr = paneList.querySelectorAll(".pane-item");

    if (e.target.classList.contains("is-active") || e.target == this) {
      return;
    }
    tabItemArr.forEach((element, index) => {
      if (element == e.target) {
        // activate the tab
        e.target.classList.add("is-active");
        // activate the pane
        paneItemArr[index].classList.add("show");
      } else {
        // deactivate the tabs
        element.classList.remove("is-active");
        // deactivate the panes
        paneItemArr[index].classList.remove("show");
      }
    });
  }

  // Popup callback handler
  function popupCallbackHandler(e) {
    if (e.target.classList.contains("js-callback-btn-open")) {
      callbackPopup.classList.add("is-active");
      body.classList.add("overflow");
    }
    if (e.target.classList.contains("js-callback-btn-close")) {
      callbackPopup.classList.remove("is-active");
      body.classList.remove("overflow");
    }
  }
});
