/*
    https://developer.mozilla.org/en-US/docs/Web/Events

    addEventListener() - allows you to add multiple event listeners to a single element
    removeEventListener() 
        - allows you to remove event listeners from a single element
        - You can only remove event listeners that were added with addEventListener()
        - Usage same as addEventListener(). But we have to pass the same function reference.
    EventTarget.addEventListener() - allows you to add multiple event listeners to a single element
    EventTarget.removeEventListener() - allows you to remove event listeners from a single element
    EventTarget.dispatchEvent() - allows you to trigger an event on a given element (useful for custom events)
    Event - the event object that is passed to the event handler function
    We have attributes like target, type, bubbles, cancelable, and more.
    We will look at some of them in the next.

    * 1. Event type
    - click
        - It's triggered when the element is clicked.
    - mouseenter
        - It's triggered when the mouse pointer enters the element.
    - mouseleave
    - mouseover
    - mouseout
    - mousemove
    - mousedown
    - mouseup
    - keydown
    - keyup
    - focus
    - blur
    - submit
        - It's triggered when the form is submitted.
    - change
    - input
    - scroll
        - It's triggered when the element is scrolled.
    - resize
    - load
    - DOMContentLoaded
    - dragstart
        - It's triggered when the user starts dragging an element.
    - dragenter or dragover
        - It's triggered when the user drags an element over a valid drop target.
    - dragleave
        - It's triggered when the user drags an element outside a valid drop target.
    - drop
        - It's triggered when the dragged element is dropped on a valid drop target.
    - dragend
        - It's triggered when the user finishes dragging an element.

 * 2. Event handler
    - It's a function that will be executed when the event occurs.
    - It's taking an event object as an argument.
 * 3. Options
    - true - The event handler will be executed in the capturing phase
        - The capturing phase is the first phase of the event flow. It starts from the root element and goes down to the element that triggered the event.
    - false - The event handler will be executed in the bubbling phase
        - The bubbling phase is the second phase of the event flow. It starts from the element that triggered the event and goes up to the root element.

*/

const button = document.querySelector('button');

// button.onclick = function() {
//     alert('Button was clicked!');
// };

const buttonClickHandler = (event) => {
    console.log(event);
    console.log('This function triggered by addEventListener!');
};

button.addEventListener('click', buttonClickHandler, false);


// Don't forget, if you add with onclick, it will be overwritten for before one.
button.onclick = function(event) {
    console.log('Button was triggered by onclick!');
};

const anotherButtonClickHandler = (event) => {
    console.log('Button was triggered by onclick2!');
};

button.onclick = anotherButtonClickHandler;

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
    // You can not remove this event listener. Because it's not added with addEventListener.
    button.removeEventListener('click', anotherButtonClickHandler);
}, 5000);



/*
    Event Object:
    - It's an object that is passed to the event handler function.
    - It contains information about the event.
    - It's different for each event type.
    - It's an instance of the Event class.
    
    Properties: (Most used properties)
    - target - the element that triggered the event
    - type - the type of the event
    - currentTarget - the element that the event handler is attached to (useful when using event bubbling)
    - cancelable - boolean value that indicates if the event is cancelable or not
    - stopPropagation() - allows you to stop the event from bubbling up
    - preventDefault() - allows you to prevent the default behavior of the element
    - isTrusted - boolean value that indicates if the event was triggered by the user or by a script
    - detail - additional information about the event (useful for custom events)
    - returnValue - allows you to set the return value of the event (useful for custom events)
    - which - the button that was pressed when the event was triggered (useful for mouse events)
    - key - the key that was pressed when the event was triggered (useful for keyboard events)
*/


// mouseenter
// We can see relatedTarget property in the event object.
// It's the element that we came from.
// But if we move so fast, it won't be parent element. Because js controls it periodically.
button.addEventListener('mouseenter', event => {
    console.log("You entered the button!");
    console.log(event);
});


// preventDefault()
// It's used to prevent the default behavior of the element.
// For example, if we have a link, it will prevent the link from being clicked.

const form = document.querySelector('form');

// Way 1
/*
const formBtn = form.querySelector('button');

formBtn.addEventListener('click', event => {
    console.log("You clicked the button! But I don't want to refresh the page! I'm in button!");
    event.preventDefault();
    console.log(event);
});
*/

// Way 2
form.addEventListener('submit', event => {
    console.log("You clicked the button! But I don't want to refresh the page! I'm in form!");
    event.preventDefault();
    console.log(event);
});


// Capturing and Bubbling
// Event flow: Capturing -> Target -> Bubbling
// Capturing: The event goes down to the element.
// Bubbling: The event goes up to the root element.
// If we used addEventListener order will be like that.
// But if we used onclick, it will be just Bubbling.
// We can change it with third parameter of addEventListener.


// That's the default behavior.
// That's bubbling. Because when we click the button, it goes up to the root element.
// If root's have event listener, it will be triggered.

// When I gave true, it will be capturing. for element.
// I gave true for div element. When i click the button, div will be triggered first.
// Later button will be triggered and then body will be triggered.

// If you don't know event is bubbling or capturing, you can check it with event.bubbles property.
const divs = document.querySelectorAll('div');

const divClickHandler = event => {
    console.log('DIV click handler');
    console.log(event);
}

const bodyClickHandler = event => {
    console.log('BODY click handler');
    console.log(event);
}

const buttonClickHandler2 = event => {
    // When we click the button, it will be triggered. But stop other event listeners after this event listener.
    event.stopPropagation();

    // It will stop all event listeners after this event listener.
    event.stopImmediatePropagation();
    console.log('BUTTON click handler');
    console.log(event);
}

const buttonClickHandler3 = event => {
    console.log('BUTTON3 click handler');
    console.log(event);
}

divs.forEach(div => {
    div.addEventListener('click', divClickHandler, true);
});

document.body.addEventListener('click', bodyClickHandler);

button.addEventListener('click', buttonClickHandler2);

button.addEventListener('click', buttonClickHandler3);


// Event Delegation

// That's not good. Because we have to add event listener for each li element.
// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

// We can use event delegation.
// We can add event listener to parent element.
// It will look at himself. Later it will look at his children.
const list = document.querySelector('ul');

// Don't forget, we are listening to the ul element. It's pointing with currentTarget. But When we click target will show innermost element.
// We can use closest method to find the element that we want.
// closest method will find the closest element that we want. That can be itself too.

// I will use function expression. Because I want to use this keyword with clicked element.
// If we use arrow function, this keyword will be window object.
list.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
    
    event.target.closest('li').classList.toggle('highlight');
});



// Triggering DOM Elements Programmatically

// We created an event.
// If you trigger submit event, it will be triggered. But listener will not be triggered.
// form.submit();
button.click();