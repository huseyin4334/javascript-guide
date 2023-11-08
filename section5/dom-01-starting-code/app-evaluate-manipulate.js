/*

    Attributes: id, class, style, title, lang, dir, tabindex, accesskey, hidden, draggable, contenteditable, spellcheck
        - Attributes are mapped to properties generally.
        - We can access attributes via getAttribute() method.
        - We can set attributes via setAttribute() method.
        - We can remove attributes via removeAttribute() method.
        - We can check if an element has an attribute via hasAttribute() method.
    Properties: textContent, innerText, innerHTML, outerHTML, value, checked, src, href, id, className, classList, style, title, lang, dir, tabindex, accesskey, hidden, draggable, contenteditable, spellcheck
    
    Properties are DOM objects. And If we change the attribute, it will change the property too. Because they are mapped to each other (generally).
    But if we change the property, it will not change the attribute. Because properties not mapped to attributes (generally). (except mapped objects)

    For example:
    <input type="text" id="name" value="John" />
    
    const name = document.getElementById('name');
    
    name.getAttribute('value'); // John
    
    name.value = 'Jane';
    
    name.getAttribute('value'); // John
    name.value; // Jane

    // Solution:
    name.setAttribute('value', 'Jane');
    
    name.getAttribute('value'); // Jane
    name.value; // Jane
    

*/

function consoleElement(element) {
    console.log("Text Context: ", element.textContent);
    console.log("Id: ", element.id); 
    console.log("className: ", element.className);
    console.log("classList: ", element.classList); 
}

// <h1 id="main-title" class="somethings somethingElseToo">DOM Interaction</h1>

const h1 = document.getElementById('main-title');

consoleElement(h1);

h1.textContent = 'Some New Title'; // DOM Interaction
h1.className = 'title'; // DOM Interaction

consoleElement(h1);

// style property

const stylePalette = h1.style; // CSSStyleDeclaration object

stylePalette.backgroundColor = 'red'; // DOM Interaction
stylePalette.color = 'white'; // DOM Interaction