const postUl = document.querySelector(".posts");
const temp = document.querySelector("#post-item-template");

const xhr = new XMLHttpRequest();

// we prepared request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// If I don't use this, xhr will get response like string.
xhr.responseType = 'json';

// It gets response. We can prepare and parse response with this function
xhr.onload = function() {
    // response is string. not json yet.
    const data = xhr.response;
    
    console.log(typeof data);

    /*

    // If I don't set response type, I can parse responsed string.
    const parsedData = JSON.parse(data);

    console.log(typeof parsedData);
    console.log(parsedData);
    
    */

    // prepared data to html code
    data.forEach(post => {
        const preparedNode = document.importNode(temp.content, true);

        preparedNode.querySelector('h2').textContent = post.title.toUpperCase();
        preparedNode.querySelector('p').textContent = post.body;

        postUl.append(preparedNode);
    });
}


// we sended request
// xhr.send();