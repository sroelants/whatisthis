"use strict";

require("prism.js");

var aboutLink = document.getElementById("footer__about");
var aboutCard = document.querySelector(".about");
var codeSnippet = document.querySelector(".codesnippet");
var correctCard = document.querySelector(".correct.card");
var incorrectCard = document.querySelector(".incorrect.card");
var explanationCard = document.querySelector(".explanation.card");
var mask = document.querySelector(".mask");
var buttons = document.querySelectorAll(".options__button");
var closeButtons = document.querySelectorAll(".close");
var nextButtons = document.querySelectorAll("button.next");
var explanationButtons = document.querySelectorAll("button.explanation");

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
}); // Fetch examples json and return a Promise Object containing all the questions

var questionObjectPromise = fetch("/assets/examples.json").then(function (response) {
  return response.json();
});

function showQuestion(obj) {
  populateQuestion(getRandomQuestion(obj));
}

function getRandomQuestion(obj) {
  var list = obj["list"];
  var index = list.length * Math.floor(Math.random());
  return list[index]; // Return Promise Question
}

function populateQuestion(q) {
  console.log(prism.highlightAll(q.snippet));
  codeSnippet.innerHTML = q.snippet;
} // questionObjectPromise.then(showQuestion);