var $jq = jQuery.noConflict();

$jq(document).ready(function () {
  feather.replace();

  $("#sidebar-toggle").on("click", function () {
    if ($(".mobile-sidebar").css("display").toLowerCase() == "flex") {
      $(".mobile-sidebar").animate({ width: "0" }, "slow");
      $(".page-container").css("filter", "none");
      setTimeout(() => {
        $("body").css("overflow-y", "auto");
        $(".mobile-sidebar").hide();
      }, 600);
    } else {
      $("body").css("overflow-y", "hidden");
      $(".page-container").css("filter", "brightness(0.5)");
      $(".mobile-sidebar")
        .css("display", "flex")
        .animate({ width: "100vw" }, "slow");
    }
  });

  $("#sidebar-collapse1").on("click", function () {
    $("#collapsed-chevron1").toggleClass("fa-plus fa-minus");
  });
  $("#sidebar-collapse2").on("click", function () {
    $("#collapsed-chevron2").toggleClass("fa-plus fa-minus");
  });

  $(".banner-slide").slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const feedbackSlideOpt = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: "swing", // see http://api.jquery.com/animate/
    speed: 700,
    dots: true,
    arrows: false,
    // customPaging: function (slick, index) {
    //     return `<img src="./../images/avatar-${index + 1}.jpg" id="avt-${
    //       index + 1
    //     }"  />`;
    // },
    customPaging: function (slick, index) {
      return `<img class="slick-dots-custom" src="images/avatar-${
        index + 1
      }.jpg" id="avt-${index + 1}"  />`;
    },
  };

  $(".feedback-slide").slick(feedbackSlideOpt);
  $(".customer-slide").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".go-to-top-btn").fadeIn();
    } else {
      $(".go-to-top-btn").fadeOut();
    }
  });

  $(".go-to-top-btn").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
});
