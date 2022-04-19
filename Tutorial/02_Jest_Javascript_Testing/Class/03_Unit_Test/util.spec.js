const { generateText } = require("../../util");
// because we want to test 'generateText' function we will going to import inside here

test("should output name and age", () => {
  const text = generateText("Max", 29);
  //   now here we are calling function here and passing the required argument
  expect(text).toBe("Max (29 years old)");
  const text2 = generateText("Anna", 28);
  expect(text2).toBe("Anna (28 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
