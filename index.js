require("isomorphic-fetch");

const sum = (a, b) => {
  return a + b;
};

const reverse = (str) => {
  let arr = str.toLowerCase().split("").reverse().join("");

  if (arr === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const getFirstTodo = async () => {
  let req = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let result = await req.json();

  return result;
};

console.log(getFirstTodo(), "getFirstTodo");

module.exports = {
  sum,
  reverse,
  getFirstTodo,
};
