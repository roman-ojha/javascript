/* 
What is Asynchronous Programming?
    a) any computation we do requires processor for our javascropt engine to get the job done!
    b) Many requests interact with things outside of the processor. For example, they may communicate over a network 
    or request data from the storage diak.
    c) This is a lot slower than getting it from memory.
    d) We don't want our processor to sit idle when suck things are happening 
*) Synchronous vs Asynchronous programming
    1) An asynchronous model allows multiplw things to happen at the same time.
    2) in a synchronous programming model, things happen one at a time.
    3) When you call a function that performs a long action, it returns only when the action has finished so that it can retrun the result.
    4) this stops your program for the time the action takes.
*) Few ways to write asynchronous code in javascript
    1) Async/await
    2) Callbacks
    3) promises
*/

console.log("This is tutorial 34");

setTimeout(() => {
  for (let index = 0; index < 4005; index++) {
    const element = index;
    console.log("This is index number" + index);
  }
}, 100); // this will going to take a lot of time to print upto 4005 that's why we are giving settimeout function which will say that that function will print at it's time but let's move to the next line and process that line where in this situation console.log("done printing"); will going to process without completing that for loop

console.log("done printing");
