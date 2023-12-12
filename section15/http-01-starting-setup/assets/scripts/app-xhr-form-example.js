// ADD
const form = document.querySelector('#new-post form');
const addBtn = document.querySelector('#new-post button');

// FETCH
const fetchBtn = document.querySelector('#available-posts button');

function postHandler() {
    const title = form.querySelector('#title').value;
    const body = form.querySelector('#content').value;

    createPost(title, body);
}

async function deleteHandler(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log("clicked btn");

        // const whereClicked = event.target.closest('li');
        const whereClicked = event.target.parentElement.id;

        console.log(whereClicked);

        const response = await sendRequest(
            'DELETE',
            `https://jsonplaceholder.typicode.com/posts/${whereClicked}`
        );

        console.log("DELETE", response);

        event.target.parentElement.parentElement.removeChild(event.target.parentElement);

    }
}

// If you will stop event. You have to first layer function it.
// You can send event to function. But you can not do with bind.
addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    postHandler();
});

fetchBtn.addEventListener('click', () => {
    postUl.innerHTML = '';
    fetchPosts();
});

postUl.addEventListener(
    "click",
    (event) => deleteHandler(event)
)