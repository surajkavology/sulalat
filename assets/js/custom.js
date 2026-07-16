$(document).ready(function () {
  $(".mega-menu").click(function () {
    $(this).find(".mega-dropdown").toggleClass("active");
  });

  // for about tabs

  $(function () {
    $(".tab-btn").on("click", function () {
      const tab = $(this).data("tab");
      $(".tab-btn").removeClass("active");
      $(this).addClass("active");
      $(".tab-panel").removeClass("active");
      $("#" + tab).addClass("active");
    });
  });
});

const leftSwiper = new Swiper(".leftSwiper", {
  loop: true,
  speed: 800,
  // autoplay: {
  //     delay: 3500,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".leftSwiper .swiper-pagination",
    clickable: true,
  },
});

const rightSwiper = new Swiper(".rightSwiper", {
  loop: true,
  speed: 800,
  // autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".rightSwiper .swiper-pagination",
    clickable: true,
  },
});

const categorySlider = new Swiper(".categorySlider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },

    1200: {
      spaceBetween: 20,
    },
  },
});

const coffeeShopSlider = new Swiper(".coffeeShopSlider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 40,
  loop: false,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 25,
    },
    1200: {
      spaceBetween: 40,
    },
  },
});


// Image Slider
const timelineImage = new Swiper(".timeline-image-slider", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
});

// Content Slider
const timelineContent = new Swiper(".timeline-content-slider", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
});

// Sync Both Sliders
timelineImage.controller.control = timelineContent;
timelineContent.controller.control = timelineImage;

// Navigation
document.querySelector(".timeline-next").addEventListener("click", () => {
    timelineImage.slideNext();
});

document.querySelector(".timeline-prev").addEventListener("click", () => {
    timelineImage.slidePrev();
});


const yearBtns = document.querySelectorAll(".year-btn");
const progressBar = document.querySelector(".progress-bar");

function updateTimeline(index) {

    yearBtns.forEach(btn => btn.classList.remove("active"));

    yearBtns[index].classList.add("active");

    // Progress
    const total = yearBtns.length - 1;
    const percentage = (index / total) * 100;

    progressBar.style.width = percentage + "%";
}

// Initial
updateTimeline(0);

// Swiper Change
timelineImage.on("slideChange", function () {
    updateTimeline(this.activeIndex);
});

// Click Years
yearBtns.forEach((btn, index) => {

    btn.addEventListener("click", function () {

        timelineImage.slideTo(index);

    });

});