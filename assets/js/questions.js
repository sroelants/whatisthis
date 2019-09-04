let questions = [
  {
    codesnippet: `
'use strict';

function fun(a, b) {
  return a + b;
}
console.log(this);
    `,
    options: ["window", "undefined", "fun", "console"],
    correct: "window",
    explanation: `<p>In a global context (ie. when not referenced within the body of a function
  declaration), <code>this</code> always refers to the global object, in this case <code>window</code>.
  This remains true whether javascript is running in strict mode or not.</p>
 `
  },
  {
    codesnippet: `
var obj = {
  data: 5
};

function myFun() {
  return this
}

obj.fun = myFun;
console.log(obj.fun());
    `,
    options: ["window", "undefined", "myFun", "obj"],
    correct: "obj",
    explanation: `<p><code>this</code> refers to the <em>execution</em> context.
    It completely disregards the lexical context of where the keyword is used
    within the program code. In this instance, the function body is run as a 
    method on the object <code>obj</code>, so the execution context sets <code>
    this</code> to <code>obj</code></p>`
  },
  {
    codesnippet: `
var obj = {
  data: 5
  myMethod: function(a, b) {
    console.log(this);
    return a + b;
  }
};
var myFun = obj.myMethod;
myFun(1,2);
    `,
    options: ["window", "undefined", "myFun", "obj"],
    correct: "window",
    explanation: `<code>this</code> refers to the <em>execution</em> context of
    a function. Even though <code>myFun</code> is a reference to the
    <code>myMethod</code> method on <code>obj</code>, it is <em>executed</em> as a
    top-level function. Hence, the execution context is set to <code>
    window</code> (How would this change if we set <code>'use strict;'</code>?)
    </p>`
  },
  {
    codesnippet: `
var luke = {
  name: "Luke",
  greet: function() {
    console.log("My name is" + this.name);
  }
};
var mike = Object.create(luke);
mike.name = "Mike";
mike.greet();
    `,
    options: ["window", "undefined", "mike", "luke"],
    correct: "mike",
    explanation: `<p>
    Even though <code>mike</code> doesn't have a <code>greet()</code> method
    set, it inherits it from the <code>luke</code> prototype. Since <code>this
    </code> refers to the execution context, not the lexical context (where it
    is defined), it refers to <code>mike</code>, not <code>luke</code>.
    </p>`
  },
  {
    codesnippet: `
'use strict';
function highFives(name) {
  console.log(this + "high fives " + name + "!");
}

highFives.call("Mike", "Putin");
    `,
    options: ["Mike", "undefined", "Putin", "window"],
    correct: "Mike",
    explanation: `<p>
    The <code>.call()</code> method, defined for function objects, allows one to 
    explicitely pass a value for <code>this</code> as its first argument. Note 
    that <code>this</code> need not refer to a javascript object, but can be any
    datatype, even a string or an integer.
    <em>Fun fact:</em> All function calls, behind the screens, are transformed 
    by javascript to an invocation of the <code>call()</code> method. Running a 
    top-level function <code>fun()</code> is translated by javascript to
    <code>fun.call(window)</code> (or <code>fun.call(undefined)</code>, if we are
    in strict mode.
    </p>`
  },
  {
    codesnippet: `
let mascot = {
  name: "Tony the Tiger",
  printMood: function(mood) {
    console.log(this.name + " is feeling " + mood);
  }
}

let printEmotionalState = function(state){ 
  return mascot.printMood.call(mascot, state);
}

printEmotionalState("meh.")
    `,
    options: ["mascot", "undefined", "Tony the Tiger", "window"],
    correct: "mascot",
    explanation: `<p>
    This one is tricky. <code>printEmotionalState</code> is a top-level function 
    that is called in a global context, so we would expect <code>this</code> to
    refer to the <code>window</code> object. However, <code>printEmotionalState
    </code> invokes <code>mascot.printMood</code> <em>using the <code>call</code>
    method</em> and binding <code>this</code> back to <code>mascot</code> 
    explicitely!
    </p>`
  },
  {
    codesnippet: `
    'use strict';
    function Simpson(name) {
      this.name = "Lisa";
    }

    function Flanders(name) {
      this.name = name;
      return {name: "Todd"};
    }
    let bart = new Simpson("Bart");
    let rod = new Flanders("Rod");
    console.log(bart.name + " and " + rod.name); // What is printed?
    `,
    options: ["Bart and Rod", "Lisa and Todd", "Lisa and Rod", "Bart and Todd"],
    correct: "Lisa and Todd",
    explanation: `<p>
    This is a trick question that has more to do with constructors than it does
    with <code>this</code>. In a typical constructor call (that is, a function
    that is called with the <code>new</code> keyword and returns an object), the
    the <code>this</code> keyword refers to the newly created object, and is
    returned by the constructor call. <em>But</em>, if we wanted to, we can 
    make the constructor return <em>any</em> object we wish by explicitely 
    adding a <code>return</code> statement returning an object. In this case,
    the <code>Flanders</code> constructor creates a new Flanders instance with
    <code>name</code> set to "Rod", but <em>instead</em> returns a different
    object, with <code>name</code> set to "Todd". The creation of the first 
    object is essentially for nothing.
    </p>`
  }
];

export { questions };
