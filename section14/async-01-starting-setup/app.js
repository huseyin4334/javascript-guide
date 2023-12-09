const button = document.querySelector('button');
const output = document.querySelector('p');


const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};


function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
      console.log("Pos data came but I'm async code");
    },
    error => {
      console.log(error);
    }
  );

  setTimeout(() => {
    console.log('Timer done!');
  }, 0);

  console.log('Getting position...');
}

function trackUserHandler2() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log("promise finished. We are in then()");
        console.log(data, posData);
      });
      console.log("Pos data came but I'm async code2");
    },
    error => {
      console.log(error);
    }
  );

  setTimeout(() => {
    console.log('Timer done2!');
  }, 0);

  console.log('Getting position2...');
}

const getLoc = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      posData => {
        resolve(posData);
      },
      error => {
        reject(error);
      }
    );
  });
  return promise;
}

function trackUserHandler3() {
  getLoc()
  .catch(error => { // cactch where is not important
    console.log("I catched it.");
    return "I catched it.";
  })
  .then(posData => {
    console.log("promise finished in chain. We are in then1()");
    console.log(posData);
    return setTimer(2000);
  }, error => {
    console.log(error);
    return error.message;
  }).finally(() => {
    console.log("finally");
  })
  .then(data => {
    console.log("promise finished in chain. We are in then2()");
    console.log(data);
  });

  setTimeout(() => {
    console.log('Timer done3!');
  }, 0);

  console.log('Getting position3...');
}

//button.addEventListener('click', trackUserHandler);
//button.addEventListener('click', trackUserHandler2);
button.addEventListener('click', trackUserHandler3);

//let result = 0;
//for (let i = 0; i < 1000000000; i++) {
//  result += i;
//}

//console.log(result);


/*
  Rendering and running first calls the synchronous code. After that, it runs the asynchronous code.
  If we click the button before the synchronous code dont finish, the asynchronous code will be waiting for the synchronous code to finish.

  Event loop, Queue and Async code:
  - Every callable goes to the stack and runs.
  - If the callable is callback, it goes to the Web APIs from the stack.
  - Callable async code goes to the queue from the Web APIs.
  - Event loop checks the stack and the queue. If the stack is empty, it takes the first callable from the queue and puts it to the stack.
  - If the stack is not empty, it waits for the stack to be empty.

*/

/*
  Promises:
  - Promises are a way to handle asynchronous code.
  - Promises are a JavaScript object.
  - We can syncronize the code with promises.
  Promise states:
  - Pending: Initial state, neither fulfilled nor rejected.
  - Fulfilled: Meaning that the operation completed successfully.
  - Rejected: Meaning that the operation failed.
  Promise methods:
  - then(): It is called when the promise is fulfilled.
  - catch(): It is called when the promise is rejected.
  - finally(): It is called when the promise is fulfilled or rejected.
  - These methods return a new promise. So you can chain them.
  Promise Constructor:
  - Promise constructor takes a function as an argument.
  - This function takes two arguments, resolve and reject.
  - resolve and reject are functions.
  - resolve() is called when the promise is fulfilled.
  - reject() is called when the promise is rejected.
  - resolve() and reject() can take an argument.
  - We are using them for what happend in promise. What is consuquance of promise.
*/


/*
  Async/Await:
  - Async/Await is a way to handle asynchronous code.
  - Async functions return a promise.
  - Async functions are declared with the async keyword.
  - Await keyword can be used inside async functions.
  - Await keyword waits for the promise to be fulfilled and returns the result.

  - If you used await keyword, this keyword will block the code until the promise is fulfilled.


  Important:
  If you use async/await, you should use try/catch block and you should know that the code will be blocked until the promise is fulfilled.
  If you use promise chain, promises don't block other code. Just your then() block will be blocked until the promise is fulfilled.
*/

async function trackUserHandler4() {
  let posData;
  let timerData;
  try {
    posData = await getLoc();
    console.log("promise finished in location. Data is:", posData);
    timerData = await setTimer(2000);
    console.log("promise finished in timer. Data is:", timerData);
  } catch (error) {
    console.log("Error ", error);
  }

  console.log("We are in trackUserHandler4");
}

button.removeEventListener('click', trackUserHandler3);

button.addEventListener('click', trackUserHandler4);


/*
  Promise.all():
  - Promise.all() takes an array of promises as an argument.
  - Promise.all() returns a new promise.
  - Promise.all() waits for all promises to be fulfilled.
  - Promise.all() returns an array of results.
  - If one of the promises is rejected, Promise.all() returns the error.

  Promise.race():
  - Promise.race() takes an array of promises as an argument.
  - Promise.race() returns a new promise.
  - It returns the result of the first promise that is fulfilled.
  - If the first promise is rejected, it returns the error.

  Promise.all([getLoc(), setTimer(1000)]).then(data => {
    console.log(data); 
    // [posData, timerData]
  });

  Promise.race([getLoc(), setTimer(1000)]).then(data => {
    console.log(data); 
    // posData or timerData
  }


  Promise.allSettled():
  - Promise.allSettled() takes an array of promises as an argument.
  - Promise.allSettled() returns a new promise.
  - Promise.allSettled() waits for all promises to be settled.
  - Promise.allSettled() returns an array of results.
  - It will wait for all promises to be fullfilled or rejected. It will return an array of returned values or errors.


  Promise.allSettled([getLoc(), setTimer(1000)]).then(data => {
    console.log(data); 
    // [{status: "error", reason: "Error: PERMISSION_DENIED: User denied geolocation prompt."}, {status: "fulfilled", value: "Done!"}]
  }

*/