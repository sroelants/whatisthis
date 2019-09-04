var obj = { data: 5 };

function myFun() {
  return this;
}
obj.fun = myFun;
console.log(obj.fun());
