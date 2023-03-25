//!Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//! Slider 
//! home sidebar start 

const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");


btnOpenSidebar.addEventListener("click",function(){
    sidebar.style.left = "0px"
    
})

//! home sidebar end //   //