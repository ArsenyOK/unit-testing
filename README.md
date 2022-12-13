# Unit Testing with using Jest Library for JS

## How to install Jest?

### *Step 1*: 
Code in terminal command `npm init`. After installed you will see package.json file in your folder

### *Step 2*: 
Next command `npm install --save-dev jest`. This command helps you to install **jest** package 

### *Step 3*:
Need to add new script to **package.json**

```no-highlight
{
  "name": "unit-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "isomorphic-fetch": "^3.0.0",
    "jest": "^29.3.1"
  }
}

```

*And don't forget to create `index.js`. It's needed for adding new function for your tests*

### *Step 4*:
And the last step you merely need to create `index.test.js` and create your first **unit test**

*Example:*

```no-highlight
 test("Find Max number of Array", () => {
  expect(Math.max.apply(null, [1, 20, 400, 3])).toBe(400);
});
```

**This Unit test** is testing `Math.max` function and with using `toBe()` method It predicts our result.

We should have this result if our result will be successfully

*View*:

![UnitTest](https://user-images.githubusercontent.com/43606985/207424369-10a1371c-0a3f-4591-898e-126ae5022501.PNG)

