//!Slider start//
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//! Slider end //
//! home sidebar start //
$(document).ready(function() {
    $("#btn-menu").click(function() {
        $("#sidebar").toggleClass("active");
    });
    $(".side-bar-close").click(function() {
        $("#sidebar").removeClass("active");
      });
});
//! home sidebar end //   //

 //!!  tab menu  start //////
 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

//?? Tab menu slider start //

var swiper = new Swiper(".smySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      768: {
        slidesPerView:4,
        spaceBetween:10
        }
   }
  });

//?? Tab menu slider end  //
 //!!  tab menu  end //////
