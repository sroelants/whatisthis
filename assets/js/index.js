const aboutLink = document.getElementById("footer__about");
const aboutCard = document.querySelector(".about");
const codesnippetContent = document.querySelector(".codesnippet__content");
const correctCard = document.querySelector(".correct.card");
const incorrectCard = document.querySelector(".incorrect.card");
const explanationCard = document.querySelector(".explanation.card");
const explanationContent = document.querySelector(".explanation__content");
const mask = document.querySelector(".mask");
// const buttons = document.querySelectorAll("button.options__button");
const optionsElement = document.querySelector(".options");
const closeButtons = document.querySelectorAll(".close");
const nextButtons = document.querySelectorAll("button.next");
const explanationButtons = document.querySelectorAll("button.explanation");

import { questions } from "/assets/js/questions.js";
import * as Prism from "./prism.js";

showNewQuestion(questions);

// Event listeners

function addAnswerListener(el) {
  let card = el.classList.contains("correct") ? correctCard : incorrectCard;
  el.addEventListener("click", () => {
    card.classList.replace("hidden", "visible");
    mask.classList.remove("hidden");
  });
}

// Wire up all the event listeners
aboutLink.addEventListener("click", () => {
  aboutCard.classList.replace("hidden", "visible");
  mask.classList.remove("hidden");
});

closeButtons.forEach(el => {
  el.addEventListener("click", () => {
    document
      .querySelector(".card.visible")
      .classList.replace("visible", "hidden");
    mask.classList.add("hidden");
  });
});

explanationButtons.forEach(el => {
  el.addEventListener("click", () => {
    document
      .querySelector(".card.visible")
      .classList.replace("visible", "hidden");
    explanationCard.classList.replace("hidden", "visible");
  });
});

nextButtons.forEach(el => {
  el.addEventListener("click", () => {
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
  let buttons = document.querySelectorAll("button.options__button");
  // Set the code snippet
  codesnippetContent.innerHTML = q.codesnippet;

  // Remove the buttons and create new ones.
  let newOptions = [...q.options];

  let newButtons = newOptions.map(option => {
    let el = document.createElement("button");
    el.textContent = option;
    el.classList.add(
      "options__button",
      option == q.correct ? "correct" : "incorrect"
    );
    return el;
  });

  buttons.forEach(el => optionsElement.removeChild(el));

  newButtons.forEach(el => {
    optionsElement.appendChild(el);
    addAnswerListener(el);
  });

  // Set the explanation
  explanationContent.innerHTML = q.explanation;
}
