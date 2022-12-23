# Asynchronous JavaScript
This project is designed to demonstrate the use of Async/Await, Promises, Error Handling, and Promise Chaining with Function Callbacks.

## Async/Await

Async/Await allows us to write asynchronous code in a more synchronous manner. It allows us to write code that will wait for a promise to resolve before continuing on to the next line of code.

For example: 

```javascript
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};
```

## Promises

Promises are objects that represent the eventual completion or failure of an asynchronous operation. A promise is in one of three possible states: fulfilled, rejected, or pending. 
