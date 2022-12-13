const fun = require("./index");

// Using Matchers

test("adds 5 + 10 to equal 15", () => {
  expect(fun.sum(5, 10)).toBe(5 + 10);
});

test("Find Max number of Array", () => {
  expect(Math.max.apply(null, [1, 20, 400, 3])).toBe(400);
});

test("Context this", () => {
  const obj = {
    id: 1,
    todo: "To train English",
    DoTodo: function () {
      return this.todo;
    },
  };

  expect(obj.DoTodo()).toBe(obj.todo);
});

test("String Ana is reverse", () => {
  expect(fun.reverse("Ana")).toBe(true);
});

test("Contain test array", () => {
  const arr = ["banana", "orange", "bread", "limon", "pineapple"];
  expect(arr).toContain("bread");
});

test("There is not R letter in significant", () => {
  expect("significant").not.toMatch("R");
});

// Testing Asynchronous Code

test("Fetch request returns Todo object", async () => {
  const objTodo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  let req = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let result = await req.json();

  await expect(result.title).toBe(objTodo.title);
});

// Order of Execution

describe("Using toEqual() method", () => {
  test("Compare two array", () => {
    const arr = ["banana", "apple", "orange"];

    expect(arr).toEqual(["banana", "apple", "orange"]);
  });

  test("Compate two array with using function", () => {
    expect(fun.returnArray()).toEqual([123, "pineapple", "sword", 0]);
  });
});

describe("describe 1-2 console.log", () => {
  test("test 1", () => console.log("test 1"));

  test("test 2", () => console.log("test 2"));
});

describe("Using mock methond", () => {
  const a = {
    age: 15,
  };

  const returnThis = function () {
    return this.age;
  };

  const myMock = jest.fn(() => {
    return this.age;
  });

  const bound = myMock.bind(a);
  console.log(bound(), "bound");

  console.log(myMock.mock.contexts, "contexts");

  test("Length of context", () => {
    expect(myMock.mock.calls.length).toBe(1);
  });
});

describe("Testing solusion function", () => {
  test(`abcdefad equels ['ab','cd', 'ef', 'a_']`, () => {
    expect(fun.solution("abcdefa")).toBe(`["ab","cd","ef","a_"]`);
  });
});
