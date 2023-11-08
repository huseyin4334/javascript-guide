/*

    DOM Nodes vs Elements:
    - DOM nodes: HTML elements are nodes.
        - Nodes are the building blocks of the DOM.
        - There are different types of nodes: elements, text nodes, comments, etc.
    - DOM elements: HTML elements are elements.
        - Elements are nodes with a tag name, an ID, a class, and so on.
        - We can access elements via the document object.
        - We can access elements via the window object.
        - We can access elements via the element object.
        - We can access elements via the event object.

    querySelector() vs getElementById():
    - querySelector(): returns the first element that matches a given CSS-style selector.
    - getElementById(): returns the element that has the ID attribute with the specified value.

    querySelectorAll() vs getElementsByClassName() vs getElementsByTagName():
    - querySelectorAll(): returns all elements that match a given CSS-style selector.
        - This method returns non-live NodeList.
        - None-live means that if we change the DOM, it will not update the NodeList.
    - getElementsByClassName(): returns all elements that have the specified class name.
    - getElementsByTagName(): returns all elements that have the specified tag name.
    - getXByY(): returns live HTMLCollection. This means that if we change the DOM, it will update the HTMLCollection.

    get Functions speacial for document object. If we take a html element, we can not obj.getXByY() for that element.
    But we can use obj.getquerySelector() or obj.getquerySelectorAll() for that element.

    https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/

const title = document.getElementById('main-title');

console.dir(title); // this will show us the properties of the title element.

const items = document.querySelectorAll('.list-item'); // this will return a NodeList.
const itemsByTagName = document.getElementsByTagName('li'); // this will return a HTMLCollection.
const itemsByClassName = document.getElementsByClassName('list-item'); // this will return a HTMLCollection.

// NodeList and HTMLCollection are not arrays. We can not use array methods on them.
// But we can convert them to arrays.
// NodeList and HTMLCollection items are same.
// const itemsArray = Array.from(items);

console.log(items.length === itemsByTagName.length); // true
console.log(items.length === itemsByClassName.length); // true
console.log(items[0] === itemsByTagName[0]); // true



// ------------------------------
let selectedItem = document.querySelector('ul li:first-of-type');
console.log(selectedItem); // <li>Item 1</li>

selectedItem = document.querySelector('ul li:last-of-type');
console.log(selectedItem); // <li class="list-item">Item 3</li>

/*
    Special selectors:
    - :first-of-type
        - This selector selects the first element of its type.
    - :last-of-type
        - This selector selects the last element of its type.
    - :nth-of-type(n)
        - This selector selects the nth element of its type.
    - :nth-last-of-type(n)
        - This selector selects the nth element of its type counting from the end.
    - :only-of-type
        - This selector selects the only element of its type.
        - If there is more than one element of its type, it will not select anything.
*/

// I can access child elements with querySelector() method.
const ul = document.querySelector('ul');
const item = ul.querySelector('li');
console.log(item); // <li>Item 1</li>

const item2 = document.querySelectorAll('ul li.list-item');
console.log(item2); // NodeList(2) [li.list-item, li.list-item]


const item3 = document.querySelectorAll('li');
const item4 = document.getElementsByTagName('li');

// Very important note: item3 elements not live but item4 elements live.
// Becaouse of that, if we add new li element  or change elements to the DOM, item4 will update but item3 will not update.

const body = document.body; // <body>...</body> -> We can find querySelector() and querySelectorAll() methods in the body element.
const head = document.head; // <head>...</head>