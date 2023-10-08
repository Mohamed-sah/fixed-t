
let header = document.querySelector(".header");
// change navbar background on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
// start navbar 


let menu = document.querySelector(".menu");

menu.addEventListener('click',function(){
  let navMenu = document.querySelector('.nav_menu');
  navMenu.classList.toggle('active')
})






let myImgs = document.querySelectorAll(".my_img");

myImgs.forEach((myImg) => {
  VanillaTilt.init(myImg, {
    max: 10,
    speed: 100,
  });
});

// start js code for counter section

let numbers = document.querySelectorAll(".number");
let counters = document.querySelector(".counters");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= counters.offsetTop) {
    if (!started) {
      numbers.forEach((num) => {
        count(num);
      });
    }
    started = true;
  }
};

function count(e) {
  let target = e.dataset.target;
  console.log(target);
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == target) {
      clearInterval(counter);
    }
  }, 2000 / target);
}
// start filter section ===========================

// start data filtering ===========================
  $(document).ready(function () {
    $(".list").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".filter_item").show("1000");
      } else {
        $(".filter_item")
          .not("." + value)
          .hide("1000");
        $(".filter_item")
          .filter("." + value)
          .show("1000");
      }
    });
    $(".list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

// swiper js ======================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  scroll to top button ============================
 document.addEventListener("scroll", () => {
   let scroll = document.querySelector(".scrolltop");
   scroll.classList.toggle("active", window.scrollY > 500);
 });
 function scrolltotop() {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 }
    //   cursor animation ==============================
    // let cursor = document.getElementById("cursor");
    // document.addEventListener('mousemove',function(e){
    //     let x = e.clientX;
    //     let y = e.clientY;
    //     cursor.style.left = x + 'px';
    //     cursor.style.top = y + 'px';
    // })