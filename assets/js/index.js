const aboutLink = document.getElementById("footer__about");
const aboutCard = document.querySelector(".about");
const codesnippetContent = document.querySelector(".codesnippet__content");
const correctCard = document.querySelector(".correct.card");
const incorrectCard = document.querySelector(".incorrect.card");
const explanationCard = document.querySelector(".explanation.card");
const explanationContent = document.querySelector(".explanation__content");
const mask = document.querySelector(".mask");
const buttons = document.querySelectorAll("button.options__button");
const closeButtons = document.querySelectorAll(".close");
const nextButtons = document.querySelectorAll("button.next");
const explanationButtons = document.querySelectorAll("button.explanation");

// import questionsObj from "/assets/examples.json";
import { questions } from "/assets/js/questions.js";
console.log(questions);
import * as Prism from "./prism.js";
// import { highlight, highlightAll } from "./prism.js";
// const prism = require("./prism.js");

showNewQuestion(questions);

// Event listeners

function addAnswerListener(el) {
  if (el.classList.contains("correct")) {
    el.addEventListener("click", ev => {
      correctCard.classList.replace("hidden", "visible");
      mask.classList.remove("hidden");
    });
  } else {
    el.addEventListener("click", ev => {
      incorrectCard.classList.replace("hidden", "visible");
      mask.classList.remove("hidden");
    });
  }
}

// Wire up all the event listeners
aboutLink.addEventListener("click", ev => {
  aboutCard.classList.replace("hidden", "visible");
  mask.classList.remove("hidden");
});

closeButtons.forEach(el => {
  el.addEventListener("click", ev => {
    document
      .querySelector(".card.visible")
      .classList.replace("visible", "hidden");
    mask.classList.add("hidden");
  });
});

explanationButtons.forEach(el => {
  el.addEventListener("click", ev => {
    document
      .querySelector(".card.visible")
      .classList.replace("visible", "hidden");
    explanationCard.classList.replace("hidden", "visible");
  });
});

nextButtons.forEach(el => {
  el.addEventListener("click", ev => {
    document
      .querySelector(".card.visible")
      .classList.replace("visible", "hidden");
    mask.classList.add("hidden");
    showNewQuestion(questions);
  });
});

function showNewQuestion(list) {
  populateQuestion(getRandomQuestion(list));
  Prism.highlightAll();
}

function getRandomQuestion(list) {
  let index = Math.floor(list.length * Math.random());
  return list[index];
}

function populateQuestion(q) {
  // Set the code snippet
  codesnippetContent.innerHTML = q.codesnippet;

  // Copy the options and set the buttons + listeners
  let options = [...q.options];
  buttons.forEach(function(el) {
    let option = options.pop();
    el.innerHTML = option;
    el.classList.remove("correct", "incorrect"); // Reset correctness values
    el.classList.add(option == q.correct ? "correct" : "incorrect");
    addAnswerListener(el);
  });

  // Set the explanation
  explanationContent.innerHTML = q.explanation;
}
