<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
# Global context
Global context this (ie. not in a function context) is always `window` (or
`global`), whether strict or not.
<div class="example">
  <div class="codesnippet">
  ```js
  // Javascript
  'use strict';

  function fun(a, b) {
  return a + b;
  }

  console.log(this);
  ```
  </div>
## Options
  <ul class="options">
    <li class="correct">window</li>
    <li>undefined</li>
    <li>fun1</li>
    <li>console</li>
  </ul>

## Explanation
  <div class="explanation">
  In a global context (ie. when not referenced within the body of a function
  declaration), `this` always refers to the global object, in this case `window`.
  This remains true whether javascript is running in strict mode or not.
  </div>
</div>


<div class="example">
  <div class="codesnippet">
  ```js
  // Javascript
  'use strict';

  var obj = { fun: function(a, b) {
                      return a + b;
                    },
              prop: 43
            }

  this.obj.fun(2,4);
  ```
  </div>
## Options 
<ul class="options">
  <li class="correct">window</li>
  <li>undefined</li>
  <li>fun</li>
  <li>obj</li>
</ul>

## Explanation
  <div class="explanation">
  In a global context (ie. when not referenced within the body of a function
  declaration), `this` always refers to the global object, in this case `window`.
  This remains true whether javascript is running in strict mode or not.
  </div>
</div>
---
# Function context
Inside a top-level function (ie, not a method, constructor, etc...), the
execution context is still the global object. Consider the function to be a 
method on the global object. Running a function `fun()` is actually performed by
running a method `window.fun()` on the global `window` object. When running in
strict mode, this is no longer the case, and the function _has no execution 
context_


<div class="example">
  <div class="codesnippet">
  ```js
  function sum(a, b) {
     this.myNumber = 20;
     return a + b;
  }
  ```
  </div>

## Options
<ul class="options">
  <li class="correct">window</li>
  <li>undefined</li>
  <li>sum</li>
  <li>myNumber</li>
</ul>

## Explanation
  <div class="explanation">
  Inside a top-level function (ie, not a method, constructor, etc...), the
  execution context is still the global object. Consider the function to be a 
  method on the global object. Running a function `fun()` is actually performed by
  running a method `window.fun()` on the global `window` object. When running in
  strict mode, this is no longer the case, and the function _has no execution 
  context_.
  </div>
</div>
<script src="./savejson.js"></script>
</body>
</html>


