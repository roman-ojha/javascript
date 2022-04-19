const { generateText, checkAndGenerate } = require("../../util");
// E2E Test

test("should create an element with correct class", async () => {
  const browser = await puppeteer.launch({
    // here we are setting up a browser
    headless: false,
    // false : to run a browser with a user interface
    // headless: true,
    // if you don't want to open browser
    slowMo: 80,
    // to Show the test so that we can see what is happening
    args: ["--window-size=1920,1080"],
    // args: to lunch the browser with the given size
  });
  const page = await browser.newPage();
  // now again we will get the browser and we will create the page after that
  await page.goto("http://127.0.0.1:8080/");
  // now here we have to open the certain url and we are opening the project home url

  await page.click("input#name");
  // here now we are clicking on input field of id name
  await page.type("input#name", "Anna");
  // now we will type some value inside that field
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  // now we will press the add button and it should add into the list
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  // now here we will check the added text is working or not
  // so now here we are getting all the text content which is inside the given class name
  expect(finalText).toBe("Anna (28 years old)");
  //
}, 10000);
// we can give the maximum test timeout because we are using e2e with slowDown upto 80 it will take some time to get complete
