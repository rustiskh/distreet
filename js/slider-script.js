// слайдеры
$(document).ready(function () {
    $(".main-slider").slick({
            // variableWidth: true,
            // centerMode: true,
            // arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:
              '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg"></button>',
            nextArrow:
              '<button type="button" class="slick-next"><img src="icons/arrow-right.svg"></button>',
    });
});
//     $(".video-reviews-wrapper").slick({
//       variableWidth: true,
//       centerMode: true,
//       slidesToShow: 1,
//       dots: true,
//       responsive: [
//         {
//           breakpoint: 10000,
//           settings: "unslick",
//         },
//         {
//           breakpoint: 1030,
//           settings: {
//             centerPadding: "30px",
//             prevArrow:
//               '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg"></button>',
//             nextArrow:
//               '<button type="button" class="slick-next"><img src="icons/arrow-right.svg"></button>',
//           },
//         },
//       ],
//     });

//     $(".recommend-card-wrapper").slick({
//       responsive: [
//         {
//           breakpoint: 10000,
//           settings: "unslick",
//         },
//         {
//           breakpoint: 740,
//           settings: {
//             variableWidth: true,
//             centerMode: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             arrows: false,
//           },
//         },
//       ],
//     });
  
//   document.addEventListener("DOMContentLoaded", function () {
//     var videoSliderBtns = document.querySelectorAll(
//       ".video-reviews-wrapper .slick-dots button"
//     );
//       console.log(videoSliderBtns)
//     videoSliderBtns.forEach(function (videoSliderBtn) {
//       var textContent =
//         videoSliderBtn.textContent + " / " + videoSliderBtns.length;
  
//       videoSliderBtn.textContent = textContent;
//     });
//   });
