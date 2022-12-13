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

function solution(str) {
  const arr = str.split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let item;
    if (arr[i + 1] !== undefined) {
      item = arr[i] + arr[i + 1];
    } else {
      item = arr[i] + "_";
    }
    result.push(item);
    i++;
  }

  return JSON.stringify(result);
}

module.exports = {
  sum,
  reverse,
  getFirstTodo,
  solution,
};
