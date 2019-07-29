"use strict";

var aboutLink = document.getElementById("footer__about");
var aboutCard = document.querySelector(".about");
var correctCard = document.querySelector(".correct.card");
var incorrectCard = document.querySelector(".incorrect.card");
var explanationCard = document.querySelector(".explanation.card");
var mask = document.querySelector(".mask");
var buttons = document.querySelectorAll(".options__button");
var closeButtons = document.querySelectorAll(".close");
var nextButtons = document.querySelectorAll("button.next");
var explanationButtons = document.querySelectorAll("button.explanation"); // Get the question data from json file
// Event listeners

function addAnswerListener(el) {
  if (el.classList.contains("correct")) {
    el.addEventListener("click", function (ev) {
      correctCard.classList.replace("hidden", "visible");
      mask.classList.remove("hidden");
    });
  } else {
    el.addEventListener("click", function (ev) {
      incorrectCard.classList.replace("hidden", "visible");
      mask.classList.remove("hidden");
    });
  }
} // Wire up all the event listeners


aboutLink.addEventListener("click", function (ev) {
  aboutCard.classList.replace("hidden", "visible");
  mask.classList.remove("hidden");
});
buttons.forEach(addAnswerListener);
closeButtons.forEach(function (el) {
  el.addEventListener("click", function (ev) {
    document.querySelector(".card.visible").classList.replace("visible", "hidden");
    mask.classList.add("hidden");
  });
});
explanationButtons.forEach(function (el) {
  el.addEventListener("click", function (ev) {
    document.querySelector(".card.visible").classList.replace("visible", "hidden");
    explanationCard.classList.replace("hidden", "visible");
  });
});