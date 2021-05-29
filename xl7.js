//jshint esversion:6

/*for slideshow*/

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



/*car booking*/


const bookingCarContainer = document.querySelector(".booking-car-container");
const bookingCarButton = document.querySelector(".booking-car-button");
const form = document.querySelector(".booking-car-form");
const crossIcon = document.querySelector(".fa-times");
const cancelButton = document.querySelector(".form-button-1");

bookingCarButton.addEventListener("click", function(){
  form.classList.remove(".booking-car-form");
  bookingCarContainer.classList.add("notshowed");
  form.classList.remove("notshowed");
});

crossIcon.addEventListener("click", function(){
  form.classList.add(".booking-car-form");
  bookingCarContainer.classList.remove("notshowed");
  form.classList.add("notshowed");
});

cancelButton.addEventListener("click", function(){
  form.classList.add(".booking-car-form");
  bookingCarContainer.classList.remove("notshowed");
  form.classList.add("notshowed");
});


/*car booking*/





/*car selection*/

const XL7alpha = document.querySelector(".XL7-alpha");
const XL7beta = document.querySelector(".XL7-Beta");
const XL7zeta = document.querySelector(".XL7-Zeta");

const choice1 = document.querySelectorAll(".XL7-Type-link")[0];
const choice2 = document.querySelectorAll(".XL7-Type-link")[1];
const choice3 = document.querySelectorAll(".XL7-Type-link")[2];

const colour1 = document.querySelector(".colour1");
const colour2 = document.querySelector(".colour2");
const colour3 = document.querySelector(".colour3");


choice1.addEventListener("click", function(){
  choice1.classList.add("underline-choosed");
  choice2.classList.remove("underline-choosed");
  choice3.classList.remove("underline-choosed");

  XL7alpha.classList.remove("notshowed");
  XL7beta.classList.add("notshowed");
  XL7zeta.classList.add("notshowed");

  colour1.classList.remove("notshowed");
  colour2.classList.add("notshowed");
  colour3.classList.add("notshowed");

});


choice2.addEventListener("click", function(){
  choice2.classList.add("underline-choosed");
  choice1.classList.remove("underline-choosed");
  choice3.classList.remove("underline-choosed");

  XL7alpha.classList.add("notshowed");
  XL7beta.classList.remove("notshowed");
  XL7zeta.classList.add("notshowed");

  colour1.classList.add("notshowed");
  colour2.classList.remove("notshowed");
  colour3.classList.add("notshowed");

});


choice3.addEventListener("click", function(){
  choice1.classList.remove("underline-choosed");
  choice2.classList.remove("underline-choosed");
  choice3.classList.add("underline-choosed");

  XL7alpha.classList.add("notshowed");
  XL7beta.classList.add("notshowed");
  XL7zeta.classList.remove("notshowed");

  colour1.classList.add("notshowed");
  colour2.classList.add("notshowed");
  colour3.classList.remove("notshowed");

});


/*car selection*/


/*color selection*/
/*section 1*/
const xlAlpha1 = document.querySelector(".XL7-alpha1");
const xlAlpha2 = document.querySelector(".XL7-alpha2");
const xlAlpha3 = document.querySelector(".XL7-alpha3");
const xlAlpha4 = document.querySelector(".XL7-alpha4");


const color1Section1 = document.querySelector(".colour1-value1");
const color2Section1 = document.querySelector(".colour1-value2");
const color3Section1 = document.querySelector(".colour1-value3");
const color4Section1 = document.querySelector(".colour1-value4");


color1Section1.addEventListener("click", function(){
  xlAlpha1.classList.remove("notshowed");
  xlAlpha2.classList.add("notshowed");
  xlAlpha3.classList.add("notshowed");
  xlAlpha4.classList.add("notshowed");
});

color2Section1.addEventListener("click", function(){
  xlAlpha1.classList.add("notshowed");
  xlAlpha2.classList.remove("notshowed");
  xlAlpha3.classList.add("notshowed");
  xlAlpha4.classList.add("notshowed");
});

color3Section1.addEventListener("click", function(){
  xlAlpha1.classList.add("notshowed");
  xlAlpha2.classList.add("notshowed");
  xlAlpha3.classList.remove("notshowed");
  xlAlpha4.classList.add("notshowed");
});

color4Section1.addEventListener("click", function(){
  xlAlpha1.classList.add("notshowed");
  xlAlpha2.classList.add("notshowed");
  xlAlpha3.classList.add("notshowed");
  xlAlpha4.classList.remove("notshowed");
});
/*section1*/


/*section2*/

const xlBeta1 = document.querySelector(".XL7-beta1");
const xlBeta2 = document.querySelector(".XL7-beta2");
const xlBeta3 = document.querySelector(".XL7-beta3");
const xlBeta4 = document.querySelector(".XL7-beta4");


const color1Section2 = document.querySelector(".colour2-value1");
const color2Section2 = document.querySelector(".colour2-value2");
const color3Section2 = document.querySelector(".colour2-value3");
const color4Section2 = document.querySelector(".colour2-value4");


color1Section2.addEventListener("click", function(){
  xlBeta1.classList.remove("notshowed");
  xlBeta2.classList.add("notshowed");
  xlBeta3.classList.add("notshowed");
  xlBeta4.classList.add("notshowed");
});

color2Section2.addEventListener("click", function(){
  xlBeta1.classList.add("notshowed");
  xlBeta2.classList.remove("notshowed");
  xlBeta3.classList.add("notshowed");
  xlBeta4.classList.add("notshowed");
});

color3Section2.addEventListener("click", function(){
  xlBeta1.classList.add("notshowed");
  xlBeta2.classList.add("notshowed");
  xlBeta3.classList.remove("notshowed");
  xlBeta4.classList.add("notshowed");
});

color4Section2.addEventListener("click", function(){
  xlBeta1.classList.add("notshowed");
  xlBeta2.classList.add("notshowed");
  xlBeta3.classList.add("notshowed");
  xlBeta4.classList.remove("notshowed");
});

/*section 2*/


/*section 3*/

const xlZeta1 = document.querySelector(".XL7-zeta1");
const xlZeta2 = document.querySelector(".XL7-zeta2");
const xlZeta3 = document.querySelector(".XL7-zeta3");
const xlZeta4 = document.querySelector(".XL7-zeta4");


const color1Section3 = document.querySelector(".colour3-value1");
const color2Section3 = document.querySelector(".colour3-value2");
const color3Section3 = document.querySelector(".colour3-value3");
const color4Section3 = document.querySelector(".colour3-value4");


color1Section3.addEventListener("click", function(){
  xlZeta1.classList.remove("notshowed");
  xlZeta2.classList.add("notshowed");
  xlZeta3.classList.add("notshowed");
  xlZeta4.classList.add("notshowed");
});

color2Section3.addEventListener("click", function(){
  xlZeta1.classList.add("notshowed");
  xlZeta2.classList.remove("notshowed");
  xlZeta3.classList.add("notshowed");
  xlZeta4.classList.add("notshowed");
});

color3Section3.addEventListener("click", function(){
  xlZeta1.classList.add("notshowed");
  xlZeta2.classList.add("notshowed");
  xlZeta3.classList.remove("notshowed");
  xlZeta4.classList.add("notshowed");
});

color4Section3.addEventListener("click", function(){
  xlZeta1.classList.add("notshowed");
  xlZeta2.classList.add("notshowed");
  xlZeta3.classList.add("notshowed");
  xlZeta4.classList.remove("notshowed");
});


/*section 3*/

/*color selection*/











/*specification*/

let i = document.querySelectorAll(".container-arrow").length;

const spec1 = document.querySelectorAll(".container-arrow")[0];
const spec2 = document.querySelectorAll(".container-arrow")[1];
const spec3 = document.querySelectorAll(".container-arrow")[2];
const spec4 = document.querySelectorAll(".container-arrow")[3];
const spec5 = document.querySelectorAll(".container-arrow")[4];
const spec6 = document.querySelectorAll(".container-arrow")[5];


const dimension = document.querySelector(".dimension");
const machine = document.querySelector(".machine");
const transmission = document.querySelector(".transmission");
const weight = document.querySelector(".weight");
const foundation = document.querySelector(".foundation");
const capacity = document.querySelector(".capacity");

const arrow1 = document.querySelectorAll(".fa-chevron-down")[0];
const arrow2 = document.querySelectorAll(".fa-chevron-down")[1];
const arrow3 = document.querySelectorAll(".fa-chevron-down")[2];
const arrow4 = document.querySelectorAll(".fa-chevron-down")[3];
const arrow5 = document.querySelectorAll(".fa-chevron-down")[4];
const arrow6 = document.querySelectorAll(".fa-chevron-down")[5];


spec1.addEventListener("click", function(){
  if(dimension.classList.contains("notshowed") === true){
      dimension.classList.remove("notshowed");
      arrow1.classList.remove("arrow-down");
      arrow1.classList.add("arrow-up");
  }
  else{
    dimension.classList.add("notshowed");
    arrow1.classList.remove("arrow-up");
    arrow1.classList.add("arrow-down");
  }

  machine.classList.add("notshowed");
  arrow2.classList.remove("arrow-up");

  transmission.classList.add("notshowed");
  arrow3.classList.remove("arrow-up");

  weight.classList.add("notshowed");
  arrow4.classList.remove("arrow-up");

  foundation.classList.add("notshowed");
  arrow5.classList.remove("arrow-up");

  capacity.classList.add("notshowed");
  arrow6.classList.remove("arrow-up");

});


spec2.addEventListener("click", function(){
  if(machine.classList.contains("notshowed") === true){
      machine.classList.remove("notshowed");
      arrow2.classList.remove("arrow-down");
      arrow2.classList.add("arrow-up");
  }
  else{
    machine.classList.add("notshowed");
    arrow2.classList.remove("arrow-up");
    arrow2.classList.add("arrow-down");
  }

  dimension.classList.add("notshowed");
  arrow1.classList.remove("arrow-up");

  transmission.classList.add("notshowed");
  arrow3.classList.remove("arrow-up");

  weight.classList.add("notshowed");
  arrow4.classList.remove("arrow-up");

  foundation.classList.add("notshowed");
  arrow5.classList.remove("arrow-up");

  capacity.classList.add("notshowed");
  arrow6.classList.remove("arrow-up");

});

spec3.addEventListener("click", function(){
  if(transmission.classList.contains("notshowed") === true){
      transmission.classList.remove("notshowed");
      arrow3.classList.remove("arrow-down");
      arrow3.classList.add("arrow-up");
  }
  else{
    transmission.classList.add("notshowed");
    arrow3.classList.remove("arrow-up");
    arrow3.classList.add("arrow-down");
  }

  dimension.classList.add("notshowed");
  arrow1.classList.remove("arrow-up");

  machine.classList.add("notshowed");
  arrow2.classList.remove("arrow-up");

  weight.classList.add("notshowed");
  arrow4.classList.remove("arrow-up");

  foundation.classList.add("notshowed");
  arrow5.classList.remove("arrow-up");

  capacity.classList.add("notshowed");
  arrow6.classList.remove("arrow-up");

});

spec4.addEventListener("click", function(){
  if(weight.classList.contains("notshowed") === true){
      weight.classList.remove("notshowed");
      arrow4.classList.remove("arrow-down");
      arrow4.classList.add("arrow-up");
  }
  else{
    weight.classList.add("notshowed");
    arrow4.classList.remove("arrow-up");
    arrow4.classList.add("arrow-down");
  }

  dimension.classList.add("notshowed");
  arrow1.classList.remove("arrow-up");

  machine.classList.add("notshowed");
  arrow2.classList.remove("arrow-up");

  transmission.classList.add("notshowed");
  arrow3.classList.remove("arrow-up");

  foundation.classList.add("notshowed");
  arrow5.classList.remove("arrow-up");

  capacity.classList.add("notshowed");
  arrow6.classList.remove("arrow-up");

});


spec5.addEventListener("click", function(){
  if(foundation.classList.contains("notshowed") === true){
      foundation.classList.remove("notshowed");
      arrow5.classList.remove("arrow-down");
      arrow5.classList.add("arrow-up");
  }
  else{
    foundation.classList.add("notshowed");
    arrow5.classList.remove("arrow-up");
    arrow5.classList.add("arrow-down");
  }

  dimension.classList.add("notshowed");
  arrow1.classList.remove("arrow-up");

  machine.classList.add("notshowed");
  arrow2.classList.remove("arrow-up");

  transmission.classList.add("notshowed");
  arrow3.classList.remove("arrow-up");

  weight.classList.add("notshowed");
  arrow4.classList.remove("arrow-up");

  capacity.classList.add("notshowed");
  arrow6.classList.remove("arrow-up");

});

spec6.addEventListener("click", function(){
  if(capacity.classList.contains("notshowed") === true){
      capacity.classList.remove("notshowed");
      arrow6.classList.remove("arrow-down");
      arrow6.classList.add("arrow-up");
  }
  else{
    capacity.classList.add("notshowed");
    arrow6.classList.remove("arrow-up");
    arrow6.classList.add("arrow-down");
  }

  dimension.classList.add("notshowed");
  arrow1.classList.remove("arrow-up");

  machine.classList.add("notshowed");
  arrow2.classList.remove("arrow-up");

  transmission.classList.add("notshowed");
  arrow3.classList.remove("arrow-up");

  weight.classList.add("notshowed");
  arrow4.classList.remove("arrow-up");

  foundation.classList.add("notshowed");
  arrow5.classList.remove("arrow-up");

});

/*specification*/
