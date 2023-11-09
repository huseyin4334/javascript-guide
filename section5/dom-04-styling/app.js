/**

   CSS Styling with JavaScript
    - With style property
      - element.style.color = 'red';
    - With classList property
      - element.classList.add('className');
        - add class or classes to the element
      - element.classList.remove('className');
        - remove class or classes from the element
      - element.classList.toggle('className');
        - if class exists, remove it, otherwise add it
      - element.classList.contains('className');
        - check if class exists
      - element.classList.replace('oldClassName', 'newClassName');
        - replace class with another class
      - element.classList.item(0);
        - get class by index
    - with className property
      - element.className = 'className';

 */

const section = document.querySelector('section');

// That's important to know that style property will override any other styling.
// section.style.backgroundColor = 'gray';

// Change css with classes.
// section.classList.remove('red-bg');

// section.className = 'red-bg';

const toggleBtn = document.querySelector('button');

toggleBtn.addEventListener("click", () => {
  section.classList.toggle('red-bg');
  

  // Solution 1

  // if (section.classList.contains('invisible')) {
  //   section.classList.replace('invisible', 'visible');
  // } else {
  //   section.classList.replace('visible', 'invisible');
  // }

  // Solution 2
  section.classList.toggle('invisible'); // if class exists, remove it, otherwise add it
  section.classList.toggle('visible');

});