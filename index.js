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

console.log(reverse("Ana"));

module.exports = {
  sum,
  reverse,
};
