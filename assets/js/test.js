var luke = {
  name: "Luke",
  greet: function() {
    console.log("My name is" + this.name);
  }
};
var mike = Object.create(luke);
mike.greet = function() {
  console.log("Hi, I'm" + this.name);
};
mike.name = "Mike";
mike.greet();
