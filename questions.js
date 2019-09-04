questions = [
  {
    codesnippet: `'use strict';

    function fun(a, b) {
    return a + b;
    }
    console.log(this);
    `,
    options: ["window", "undefined", "fun", "console"],
    correct: "window",
    explanation: `In a global context (ie. when not referenced within the body of a function
  declaration), <code>this</code> always refers to the global object, in this case <code>window</code>.
  This remains true whether javascript is running in strict mode or not.
 `
  }
];
