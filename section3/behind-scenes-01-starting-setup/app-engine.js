/**
 * Created by huseyin on 6/11/23.
 
    Chrome V8 Engine
    Firefox SpiderMonkey
    Safari JavaScriptCore
    Microsoft Chakra
    Opera V8
    Node.js V8

    Javascript Engine: It is a program that executes JavaScript code. It converts JavaScript code into something the computer processor can understand.

    Garbage Collection: It is a form of automatic memory management. 
    The garbage collector attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program.

    Javascript Parsing & Execution: It is the process of interpreting the meaning of a text file.
    - Interpreter: It is parses script code, performs optimizations, and generates bytecode. It starts executing the bytecode and monitors it for optimizations.
    - Compiler (JiT): It takes the bytecode and compiles it into machine code. It is faster than interpreter. It's working parallel with interpreter.
    Compiled machine code can be executed directly on the computer's processor. It is faster than bytecode.

    Browser APIs: It is built into your web browser, and are able to expose data from the browser and surrounding computer environment and do useful complex things with it.
 */


/**
 * Inside the JavaScript Engine: How JavaScript really works?
 * 
 * We have 2 memory types in JavaScript Engine.
 * 1) Stack
 * 2) Heap
 * 
 * Stack: It is a special region of our process's memory which stores temporary variables created by a function. Short-term memory. (Like in the java stack)
 * Heap: It is an unstructured region of memory used to store objects. Long-term memory. (Like in the java heap). 
 * If your object living longer than the function, it will be stored in the heap.
 * 
 * We can see the stack and heap in the Chrome Dev Tools.
 * We can debug our code in the Chrome Dev Tools. you will see the call stack and heap in the bottom.
 * 
 * Stack will be cleared after the function execution. Heap will be cleared after the object is not used anymore.
 * 
 * IMPORTANT!!
 * javascript is a single-threaded language that can be non-blocking.
 * Because of that, stack controls which thing is running. (But Java is multi-threaded language. Every thread has its own stack.)
 * 
 * Every time we call a function, it is added to the stack. When we return from a function, it is removed from the stack.
 * Every call is waiting in the stack for execution.
 * 
 * When we add a listener, it is added to the stack. When the event is triggered, it is removed from the stack.
 * If we clicked the button, it is called the event listener function. It is added to the stack. When the function is finished, it is removed from the stack.
 */ 


/**
    Primitive Types: 
    - They are stored in the stack. They are immutable. 
    - If you copy a primitive type, browser connrect the new variable to the new value.
    - They are copied by their value. (If you change the copied value, it will not affect the original value.)
    - String, Number, Boolean, Undefined, Null, Symbol

    Reference Types: 
    - They are stored in the heap.
    - If you copy a reference type, browser connect the new variable to the original value.
    - They are copied by their reference. (If you change the copied value, it will affect the original value.)
    - Object, Array, Function
    - let arr = [1, 2, 3];
    - let arr2 = arr; // It is not copied the value. It is copied the reference.
    - let arr3 = [...arr]; // It is copied the value. It is not copied the reference. We can do this for objects too.({ ...obj })
    - ... is spread operator. It is used to split up array elements or object properties.
    - But this is not a deep copy. If you have nested objects, it will not work. You need to use a library for deep copy. (lodash -> _.cloneDeep(obj))

    IMPORTANT!!

    SCENERIO 1:

    function log() {
        console.log('Log message');
    }
    
    function addListener() {
        button.addEventListener('click', log);
    }

    addListener();
    addListener();
    addListener();

    When I add event listener, Js is just create new listener with log function. It's not add new listeners more than one.


    SCENERIO 2:

    function addEventListener() {
        addEventListener.addEventListener('click', function() {
            console.log('Clicked!');
        });
    }

    addEventListener();
    addEventListener();
    addEventListener();

    When I add event listener, Js is create a new function with new id. Because function is anonymous.
    Later, JS will add new listener with created function. And We have 3 different listeners. 
    But they are same and listening same function and same event.


    So we need to be careful about anonymus functions. Because they are different functions in call.

 * */

