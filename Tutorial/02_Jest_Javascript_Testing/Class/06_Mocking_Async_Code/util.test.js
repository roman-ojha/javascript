const { printTitle, loadTitle } = require("./util");
// jest.mock("./http");
// now here we will specify the mocked file or function

// we don't have to include mock for global packages

test("should print a uppercase text", () => {
  // expect(printTitle()).toBe("DELECTUS AUT AUTEM");
  // here if we will just expect a string by calling this function without async this will through an error because we are not returning something that is instant because we are getting async data and don't know how much time this will take to get that data
  loadTitle().then((title) => {
    // here now we are using promise function so now this function will wait for data to load and only after that it will expect from the real return data
    // but still there is a problem and the problem is we are still hitting to the api so we are now testing does api work or not we are testing our application if we are developing the api we should do api testing separately
    // we also don't want to test 'axios' 'get' method works correctly or not
    // so we want to test our own code for that we will focus on something called mocking, we mock feature or we replace feature we don't want to test with some dummy implementations
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
  // so we are calling fetchData() function inside the 'LoadTitle()' function which we can mock
  // for that we need to create '__mocks__' folder inside the project directory
  // now we will create the 'http.js' filename where our 'fetchData()' function lies
  // so now we will write some code that will replace the real function while running the test

  // NOTE: you can also mock package like here 'axios', create 'axios.js' inside the '__mocks__'
});
