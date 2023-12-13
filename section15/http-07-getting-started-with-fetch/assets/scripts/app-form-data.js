/*
    FormData() object is a built-in object in the browser
    FormData() object is a key-value pair object
    FormData() object can use for complex data types
    FormData() object can use for file uploads
    FormData() object can use for sending data to a server
    We can pass Html form element to FormData() object. It will automatically extract the data from the form. It's matching the name attributes of the form elements.
    We can pass values to FormData() object manually too.

    <form id="my-form">
        <input type="text" name="title" />
        <textarea name="content"></textarea>
        <input type="text" name="userId" />
    </form>

    const formData = new FormData(document.getElementById('my-form'));
*/







// We will send fetchData object to sendHttpRequest() function
// Because of that, We don't need to use JSON.stringify() function and Content-Type header property.
// We are using FormData() object for sending complex and other data types.

function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: data,
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


// FormData implementation

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
     alert(error.message);
  }
}

async function createPost() {
    const userId = Math.random();

    const formData = new FormData(form);
    formData.append('userId', userId);

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  createPost();
});

postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
