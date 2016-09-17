"use strict";
var burger = document.querySelector(".page-header__btn");
var form = document.querySelector(".form-area");
var close = document.querySelectorAll(".close-modal");
burger.addEventListener("click", toggleMenu, false);
function initMap() {
  var mapDiv = document.getElementById("map");
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 59.938794, lng: 30.323083},
      zoom: 16
  });
  var marker = new google.maps.Marker({
    position: map.center,
    map: map,
    icon: "../pink/img/icon-map-marker.svg"
  });
}
function toggleMenu() {
  var parent = this.parentNode.parentNode;
  parent.classList.toggle("page-header__inner--opened");
  var menu = parent.children[parent.children.length-1];
  console.log(menu);
  menu.classList.toggle("page-header__nav--opened");
  var header = document.querySelector(".page-header");
  header.classList.toggle("page-header--opened");
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
if (form){
  form.onsubmit = function(e){
    e.preventDefault();
    var name = document.querySelector("[name=personal-name]").value;
    var surname = document.querySelector("[name=personal-surname]").value;
    var patname = document.querySelector("[name=personal-patname]").value;
    var email = document.querySelector("[name=personal-email]").value;
    var phone = document.querySelector("[name=personal-phone]").value;
    if ((name != "") && (surname != "") && (patname != "") && (email != "") && (phone != "")){
      if (!validateEmail(email)){
        var overlay = document.querySelector(".overlay");
        var popup = document.querySelector(".pop-up-failure");
        overlay.style.display = "block";
        popup.style.display = "block";
      }
      else{
        var overlay = document.querySelector(".overlay");
        var popup = document.querySelector(".pop-up-success");
        overlay.style.display = "block";
        popup.style.display = "block";
      }
    }
    else{
      var overlay = document.querySelector(".overlay");
      var popup = document.querySelector(".pop-up-failure");
      overlay.style.display = "block";
      popup.style.display = "block";
    }
  }
}
for (var i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var overlay = document.querySelector(".overlay");
    var failure = document.querySelector(".pop-up-failure");
    var success = document.querySelector(".pop-up-success");
    overlay.style.display = "none";
    failure.style.display = "none";
    success.style.display = "none";
  }
}

