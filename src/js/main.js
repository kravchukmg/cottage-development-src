document.addEventListener("DOMContentLoaded", function() {
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

  // Slick slider
  $('.project-1 .slider').slick({
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          autoplay: true
        }
      }
    ]
  });
  // Slick slider
  $('.project-2 .slider').slick({
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          autoplay: true
        }
      }
    ]
  });



  let html = document.documentElement;
  let body = document.body;
  let tabListArr = document.querySelectorAll(".tab-list");
  // Сallback-popup
  let callbackBtnOpenArr  = document.querySelectorAll(".js-callback-btn-open");
  let callbackBtnCloseArr = document.querySelectorAll(".js-callback-btn-close");
  let callbackPopup       = document.querySelector(".callback-popup");
  // Project-popup
  let popupProjectBtnOpenArr  = document.querySelectorAll(".js-popup-project-btn-open");
  let popupProjectBtnCloseArr = document.querySelectorAll(".js-popup-project-btn-close");
  let popupProjectArr         = document.querySelectorAll(".popup-project");

  // Form
  let forms = document.querySelectorAll('.form')
  forms.forEach(form => form.addEventListener('submit', formSend))

  // Form handler
  async function formSend(e) {
    e.preventDefault()

    this.classList.add('is-sending')
    let submitBtn = this.querySelector('button[type=submit]')
    submitBtn.disabled = true
    let formData = new FormData(this)

    let response = await fetch('form.php', {
      method: 'POST',
      body: formData
    })

    this.classList.remove('is-sending')

    if (response.ok) {
      let result = await response.json()
      this.reset()
      if (callbackPopup.classList.contains('is-active')) {
        html.classList.remove('overflow')
        callbackPopup.classList.remove('is-active')
      }
      submitBtn.disabled = false
      // alert(result.message)
    } else {
      submitBtn.disabled = false
      alert('Error')
    }
  }

  // Tabs
  tabListArr.forEach((element) => {
    element.addEventListener("click", tabHandler);
  });

  // Callback popup
  callbackBtnOpenArr.forEach((element) => {
    element.addEventListener("click", popupCallbackHandler);
  });
  callbackBtnCloseArr.forEach((element) => {
    element.addEventListener("click", popupCallbackHandler);
  });

  // Project popup
  popupProjectBtnOpenArr.forEach((element) => {
    element.addEventListener("click", popupProjectHandler);
  });
  popupProjectBtnCloseArr.forEach((element) => {
    element.addEventListener("click", popupProjectHandler);
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
      html.classList.add("overflow");
    }
    if (e.target.classList.contains("js-callback-btn-close")) {
      callbackPopup.classList.remove("is-active");
      html.classList.remove("overflow");
    }
  }

  // Popup project handler
  function popupProjectHandler(e) {
    if (e.target.classList.contains("js-popup-project-btn-open")) {
      html.classList.add("overflow");
      popupProjectBtnOpenArr.forEach((item, i) => {
        if (e.target == item) {
          popupProjectArr[i].classList.add("is-active");
        }
      })
    }
    if (e.target.classList.contains("js-popup-project-btn-close")) {
      html.classList.remove("overflow");
      popupProjectBtnCloseArr.forEach((item, i) => {
        if (e.target == item) {
          popupProjectArr[i].classList.remove("is-active");
        }
      })
    }
  }
});
