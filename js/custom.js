$(function () {
  // Counter
  $(document).ready(function () {
    $(".minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
  // Hero Swiper
  var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Product Swiper
  var swiper = new Swiper(".productSwipper", {
    slidesPerView: 5,
    spaceBetween: 15,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Brand Swipper
  var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Category-slider
  var swiper = new Swiper(".categorySlider", {
    slidesPerView: 7,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Back to Top
  var btn = $("#button-back");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // Header Fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  });
});

// countup
$(".counter").countUp();

// Aos Animation
AOS.init();

// lighBox
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// VenuBox
new VenoBox({
  selector: ".my-video-links",
});
