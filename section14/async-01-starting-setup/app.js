const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
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

button.addEventListener('click', trackUserHandler);

let result = 0;
for (let i = 0; i < 1000000000; i++) {
  result += i;
}

console.log(result);


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

