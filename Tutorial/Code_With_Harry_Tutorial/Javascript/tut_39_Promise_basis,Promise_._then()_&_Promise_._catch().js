// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
  return new Promise(function (resolve, reject) {
    // we are saying that by promise this promise may be resolve or reject
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Your promise has been resolved");
        resolve();
      } else {
        console.log("Function: Your promise has not been resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    // resolve()== function()
    //-> it means that if that callback is resolve then what task we have to do
    console.log("Harry: Thanks for resolving");
  })
  .catch(function (error) {
    // error take the value of reject() because reject()== function(error)
    // -> if that will be reject then this task will happen
    console.log("Harry: Very bad bro. Reason: " + error);
  });
