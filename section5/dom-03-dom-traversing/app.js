/*
    Traversing the DOM:

    <div class="container">
        <p>
            Paragraph 1 <span>Span 1</span>
        </p>
        <p>
            Paragraph 2 <span>Span 2</span>
        </p>
    </div>
        

    Child
    - Direct Child node or element (without recursively)
    - <p>...</p> is a child of <div class="container">...</div> but <span>...</span> is not a child of <div class="container">...</div>

    Descendant
    - All child node or element (with recursively)
    - <p>...</p> and <span>...</span> are descendants of <div class="container">...</div>

    Parent
    - Direct Parent node or element (without recursively)
    - <div class="container">...</div> is a parent of <p>...</p> but <div class="container">...</div> is not a parent of <span>...</span>

    Ancestor
    - All parent node or element (with recursively)
    - <div class="container">...</div> is an ancestor of <p>...</p> and <span>...</span>

    Sibling
    - Nodes or elements that have the same parent
    - If your current node is <div class="container">...</div>, <p>...</p> and <p>...</p> are siblings.



    parentNode, parentElement, closest(), ... <-- curretNode --> childNodes, children, querySelector(), ...

*/

const ul = document.querySelector('ul');

ul.children; // HTMLCollection(3) [li, li, li]

ul.childNodes; // NodeList(7) [text, li, text, li, text, li, text]

// text nodes are also counted as nodes. we spoke about this in the previous sections.
// 2 types of nodes: element nodes and text nodes White space is also counted as a text node.
// If we add white-space: pre; to the ul element, the text nodes will shown in the page.

ul.firstChild; // #text
ul.firstElementChild; // <li>...</li>

ul.lastChild; // #text
ul.lastElementChild; // <li>...</li>

ul.childElementCount; // 3

ul.firstElementChild.nextElementSibling; // <li>...</li> (second li element)
ul.firstElementChild.nextElementSibling.previousElementSibling; // <li>...</li> (first li element)


const li = document.querySelector('li');

li.parentElement; // <ul>...</ul>
li.parentNode; // <ul>...</ul>

li.parentElement.parentElement; // <section>...</section>
li.parentNode.parentNode; // <section>...</section>

li.closest('body'); // <body>...</body> -> closest() method is used to find the closest ancestor element
li.closest('ul'); // <ul>...</ul>
li.closest('div'); // null

li.parentElement.parentElement.previousElementSibling; // <header>...</header>
li.parentElement.parentElement.nextElementSibling; // <input ....>


document.body.previousElementSibling; // <header>...</header>

// parentElement and parentNode are the same thing, but parentElement is more common. Just differences in this example:
document.documentElement.parentElement; // null
document.documentElement.parentNode; // #document