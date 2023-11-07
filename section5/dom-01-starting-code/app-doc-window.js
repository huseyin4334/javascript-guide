/*

    document and window objects:
    - document object: represents the DOM
        - We can access the document object without the document keyword.
        - It is the global object in client-side JavaScript.
        - We can access html elements via the document object.
    - window object: represents the browser window. 
        - We can access the window object without the window keyword. 
        - It is the global object in client-side JavaScript. We can access the document object via the window object.
        - We can access browser APIs via the window object.
*/

// window.alert('Hello World!'); -> alert('Hello World!');
// window.document.getElementById('header'); -> document.getElementById('header');

// <header><h1>DOM</h1></header> == $0 (I checked it in the console)
// When we write $0 in the console, it returns the last element we selected in the DOM.
// $0.style.color = 'red'; -> <header><h1 style="color: red;">DOM</h1></header>
// We can $1, $2, $3, ... to access the previous elements we selected in the DOM.