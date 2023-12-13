/*
    fetch('https://jsonplaceholder.typicode.com/posts')
    - fetch() is a global function that is available in the browser
    - fetch() returns a promise
    - fetch() takes one argument, a URL
    - fetch() sends a GET request by default
    - fetch() returns a response object
    - For Post requests, fetch() takes a second argument, an object with a method property
    - We can set the method property to POST, PUT, PATCH, or DELETE
    - We can also set the headers property to an object with key-value pairs
    - We can set the body property to a JSON object

    For Example:
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'My Title',
            body: 'My Body',
            userId: 1
        })
    })


    fetch() management is simple more than XMLHttpRequest

    // I can add headers to XMLHttpRequest like this:
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
*/


function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // response.text(); -> response to text
        // response.blob(); -> if you download a file

        if (response.status >= 200 && response.status > 300)
            return response.json(); // -> response to json
        else
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server-side. Because we get response.');
            });
    }).catch(error => {
        console.log(error);
        throw new Error('Something went wrong!');
    });
  }