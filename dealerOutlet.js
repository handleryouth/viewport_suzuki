//jshint esversion:6

const passengerCar = document.querySelector(".passenger");
const commercialCar = document.querySelector(".commercial");

const passengerCarList = document.querySelector(".passengercar");
const commercialCarList = document.querySelector(".commercialcar");

passengerCar.addEventListener("click", function(){
  passengerCarList.classList.remove("notshowed");
  passengerCar.classList.add("underline-choosed2");

  commercialCarList.classList.add("notshowed");
  commercialCar.classList.remove("underline-choosed2");
});

commercialCar.addEventListener("click", function(){
  passengerCarList.classList.add("notshowed");
  passengerCar.classList.remove("underline-choosed2");

  commercialCarList.classList.remove("notshowed");
  commercialCar.classList.add("underline-choosed2");
});
