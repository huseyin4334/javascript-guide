// we sended request
// xhr.send();

function sendRequest(method, url, body) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        
        xhr.responseType = 'json';
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = xhr.response;
                resolve(data);
            } else {
                reject(new Error("Something wrong"));
            }
        }

        xhr.onerror = function() {
            console.log("ERROR", xhr.status, xhr.response);
            reject(new Error("Failed request."));
        }

        xhr.send(JSON.stringify(body));
    });

    return promise;
}

async function fetchPosts() {
    try {
        console.log("Called fetching");
        
        const data = await sendRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        );


        data.forEach(post => {
            const preparedNode = document.importNode(temp.content, true);

            preparedNode.querySelector('h2').textContent = post.title.toUpperCase();
            preparedNode.querySelector('p').textContent = post.body;
            preparedNode.querySelector('li').id = post.id;

            postUl.append(preparedNode);
        });
    } catch(error) {
        console.log(error);
    }
}

// fetchPosts();


// POST

async function createPost(title, content) {
    try {
        const id = Math.random();

        const post = {
            title: title,
            body: content,
            userId: id
        };

        const data = await sendRequest(
            'POST',
            'https://jsonplaceholder.typicode.com/posts',
            post
        );

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


// createPost("Dummy Test", "Everything fine. I think It will get 201");