const aboutLink = document.getElementById("footer__about");
const aboutCard = document.querySelector(".about");
const correctCard = document.querySelector(".correct.card");
const incorrectCard = document.querySelector(".incorrect.card");
const explanationCard = document.querySelector(".explanation.card");
const mask = document.querySelector(".mask");
const buttons = document.querySelectorAll(".options__button");
const closeButtons = document.querySelectorAll(".close");
const nextButtons = document.querySelectorAll("button.next");
const explanationButtons = document.querySelectorAll("button.explanation");

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
buttons.forEach(addAnswerListener);
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

// Fetch examples json
let jsonPromise = fetch("/assets/examples.json").then(function(response) {
  return response.json();
});

jsonPromise.then(json => console.log(json[1]));
