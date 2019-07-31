// Loop over all "example" divs.
// Foreach, get the snippet, the options, the correct option and explanation
// innerHtmls. Save them all in an example object. Push it to a big examples
// object. Save the total object to a file.

let exampleList = document.querySelectorAll(".example");
var exampleData = [];

exampleList.forEach(el => exampleData.push(generateExampleData(el)));

function generateExampleData(el) {
  let snippet = el.querySelector(".codesnippet").innerHTML;
  let options = [];
  el.querySelectorAll("li").forEach(li => options.push(li.innerHTML));
  let correct = el.querySelector(".correct").innerHTML;
  let explanation = el.querySelector("div.explanation").innerHTML;

  let exampleData = {
    snippet: snippet,
    options: options,
    correct: correct,
    explanation: explanation
  };
  return exampleData;
}

function saveText(text, filename) {
  var a = document.createElement("a");
  a.setAttribute(
    "href",
    "data:text/plain;charset=utf-u," + encodeURIComponent(text)
  );
  a.setAttribute("download", filename);
  a.click();
}

saveText(JSON.stringify(exampleData), "examples.json");
