function sendHttpRequest(method, url, data) {
    switch (method) {
        case 'GET':
            return axios.get(url).then(response => {
                console.log(response);
                return response.data;
            }).catch(err => {
                console.log(err, err.response);
                throw new Error('Something went wrong - get');
            });
        case 'POST':
            return axios.post(url, data).then(response => {
                console.log(response);
                return response.data;
            }).catch(err => {
                console.log(err, err.response);
                throw new Error('Something went wrong - post');
            });
        case 'DELETE':
            return axios.delete(url).then(response => {
                console.log(response);
                return response.data;
            }).catch(err => {
                console.log(err, err.response);
                throw new Error('Something went wrong - delete');
            });;
    }
}

/*
    Axios have 6 properties that respond:
    - data
        - data is the response that we get from the server
    - status
        - status is the status code of the response
    - statusText
        - statusText is the status text of the response
    - headers
        - headers is the headers sent back by the server
    - config
        - config is the config that we used to make the request
    - request
        - request is the sent request. It's the XMLHttpRequest object or the http.ClientRequest object, depending on the environment

    If catch an error, the error object will have the following properties:
    - message
        - message is the error message text
    - response
        - response is the response object (if received) when the error was thrown
    - request
        - request is the request object
    - config
        - config is the config that was provided to axios for the request
    - code
        - code is the error code text

    IMPORTANT:
    Axios is converting body and response data to JSON by default.
    If I sent FormData, it will understand that it's FormData and it will set multipart/form-data as the content type header.
*/