/*
    getBoundingClientRect() returns the size of an element and its position relative to the viewport.

    The returned value is a DOMRect object, which contains read-only left, top, right and bottom properties describing the border-box in pixels. 
    top and left are relative to the top-left of the viewport.
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    - viewport: https://developer.mozilla.org/en-US/docs/Glossary/Viewport
        - shortly, the viewport is the user's visible area of a web page
    - x: x is starting from the left of the viewport until element's left border.
    - y: y is starting from the top of the viewport until element's top border.
    - width: width of the element.
    - height: height of the element.
    - left: left is starting from the left of the viewport until element's left border.
        - if object have normal flow, left is same as x.
        - if object have absolute position, left is starting from the left of the viewport until element's first positioned ancestor's left border.
    - top: top is starting from the top of the viewport until element's top border.
        - if object have normal flow, top is same as y.
        - if object have absolute position, top is starting from the top of the viewport until element's first positioned ancestor's top border.
    - right: right contains to x + width.


    offset:
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    - offsetWidth: width of the element + padding + border.
    - offsetHeight: height of the element + padding + border.
    - offsetTop
    - offsetLeft
    - offsetParent: returns parent element of the element.

    client:
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    - clientWidth: width of the element + padding.
    - clientHeight: height of the element + padding.
    - clientTop: top border of the element.
    - clientLeft: left border of the element.

    IMPORTANT:
    - offset and client properties are not including margin.
    - getBoundingClientRect() is including margin.
    - offset functions are not working if element have display: none, position: fixed, position: absolute.
    - client, getBoundingClientRect() functions are working if element have display: none.
    - offset functions giving outside measurements of the element.
    - client functions giving inside measurements of the element.


    scroll:
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
    - scrollWidth: width of the element + padding + scrollbar.
    - scrollHeight: height of the element + padding + scrollbar.
        - Our element have small area for text. scrollHeight is giving all text height.
    - scrollLeft: horizontal scroll position.
    - scrollTop: vertical scroll position.


    inner:
    - https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
    - innerWidth: width of the viewport.
    - innerHeight: height of the viewport.
    - innerWidth and innerHeight are not including scrollbar.
    - window.innerwidth
    - window.innerHeight
*/



/*
    scrolling:
    - overflow: auto; is adding scrollbar if element's content is bigger than element's height.
    - overflow: scroll; is adding scrollbar always.
    - overflow: hidden; is hiding scrollbar always.

    - scrollTo(x, y): scrolling to x and y coordinates.
        - x: horizontal scroll position.
        - y: vertical scroll position.
        scrollTo is going to this position directly.
    - scrollBy(x, y): scrolling by x and y coordinates.
        - x: horizontal scroll position.
        - y: vertical scroll position.
        scrollBy is iterating to this position from current position.


    scrollIntoView():
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    - scrollIntoView() is scrolling to element's position.
    - scrollIntoView() is not working if element have display: none.
    - We have some options for scrollIntoView().
        - block: start, center, end, nearest
        - inline: start, center, end, nearest
        - behavior: auto, smooth
    - element.scrollIntoView({behavior: 'smooth'});
    - element.scrollIntoView({behavior: 'smooth', block: 'start'});
*/


/*
    template:
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
    - <template> element is not showing and rendering in the page while page is loading.
    - We can seperate our html code with js code.
    - We can use <template> element for creating html code with js code.

*/