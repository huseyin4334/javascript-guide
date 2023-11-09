/*
    1. Create a new element
    2. Insert the new element into the DOM
    3. Remove an element from the DOM
    4. Replace an element in the DOM

    1. innerHTML
        - insert element like string
    2. insertAdjacentHTML
        - insert element like string with position
    3. insertAdjacentElement
        - insert element like element with position
    4. insertAdjacentText
        - insert element like text with position
    5. appendChild
        - insert element like element to the end of the current element
    6. removeChild
        - remove element from the current element
    7. replaceChild
        - replace child element with another element
    8. createElement
        - create element with tag name
    9. createTextNode
        - create element with text
    10. replaceWith
        - replace current element with another element
    11. before
        - insert element before to the outside of the current element 
    12. after
        - insert element after to the outside of the current element
    13. prepend
        - insert element to the beginning inside the current element
    14. append
        - insert element to the end inside the current element
    15. cloneNode
        - clone element
    16. insertBefore
        - insert element before another element
    17. remove
        - remove element

    Use More Than Others:
    - createElement
    - insertAdjacentElement
    - cloneNode
    - childMethods (appendChild, removeChild, replaceChild, insertBefore)
    - replaceWith
    - remove, append
    - before, after

    General Positions:
    - beforebegin
    - afterbegin
    - beforeend
    - afterend

*/

const sec = document.querySelector('section');

// 1. innerHTML
// this is changing the innerHTML of the section element
// sec.innerHTML = '<h2>Some new text</h2>';

// 2. insertAdjacentHTML
// That's not a good practice to use this method like this.
const list = document.querySelector('ul');
list.insertAdjacentHTML("beforeend", '<li class="list-item">Item 4</li>');

// 3. insertAdjacentElement and 8. createElement
const newLi = document.createElement('li');
newLi.className = 'list-item';
newLi.textContent = 'Item 5';
list.insertAdjacentElement('beforeend', newLi);

// 5. appendChild
// It's same with insertAdjacentElement. But insertAdjacentElement is more flexible.
const newLi2 = document.createElement('li');
newLi2.className = 'list-item';
newLi2.textContent = 'Item 6';
list.appendChild(newLi2);

newLi2.style.color = 'black'; // I can change the style of the element after I append it to the DOM. It will reflect on the DOM.


// 14. append
// It's same with appendChild. But append is more flexible.
const newLi3 = document.createElement('li');
const newLi4 = document.createElement('li');
newLi3.className = 'list-item';
newLi3.textContent = 'Item 7';
newLi4.className = 'list-item';
newLi4.textContent = 'Item 8';
list.append(newLi3, newLi4);

// 13. prepend
const newLi5 = document.createElement('li');
newLi5.className = 'list-item';
newLi5.textContent = 'Item 9';
list.prepend(newLi5);

// before
const newLi6 = document.createElement('li');
newLi6.className = 'list-item';
newLi6.textContent = 'Item 10';
list.lastElementChild.before(newLi6);

// !!!!!!!
// Very important if you take an element and insert it somewhere else, it will be moved from its original position.


// replaceWith
const newLi7 = document.createElement('li');
newLi7.className = 'list-item';
newLi7.textContent = 'Item 11';
list.firstElementChild.nextElementSibling.replaceWith(newLi7);

// 10. replaceChild
const newLi8 = document.createElement('li');
newLi8.className = 'list-item';
newLi8.textContent = 'Item 12';
const replaceChild = list.firstElementChild.nextElementSibling.nextElementSibling;
list.replaceChild(newLi8, replaceChild);

// cloneNode
// deep copy is cloning the element with all its children and grandchildren.
const newLi9 = newLi8.cloneNode(true);
newLi9.textContent = 'Item 13';
list.append(newLi9);

// remove
list.children[3].remove(); // remove item 3
// list.parentElement.removeChild(list);

// removeChild
list.removeChild(list.children[3]); // remove item 4
