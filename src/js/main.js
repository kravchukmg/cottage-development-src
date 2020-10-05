document.addEventListener("DOMContentLoaded", () => {
  // Lazyload init
  lazyload();
  // AOS init
  AOS.init({
    duration: 700,
    anchorPlacement: "center-bottom",
  });
  // Inputmask init
  Inputmask().mask(document.querySelectorAll(".input[name='phone']"));

  let tabListArr = document.querySelectorAll(".tab-list");

  tabListArr.forEach((element) => {
    element.addEventListener("click", tabHandler);
  });
});

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
