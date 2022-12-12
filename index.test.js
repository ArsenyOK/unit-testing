const fun = require("./index");

// Using Matchers

test("adds 5 + 10 to equal 15", () => {
  expect(fun.sum(5, 10)).toBe(5 + 10);
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
