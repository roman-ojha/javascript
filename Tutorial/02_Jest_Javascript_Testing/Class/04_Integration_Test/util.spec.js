const { generateText, checkAndGenerate } = require("../../util");
// because we want to test 'generateText' function we will going to import inside here

// Integration test:
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  // here check and Generate is the function that again require the another function inside
  expect(text).toBe("Max (29 years old)");
});
