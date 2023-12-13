/**
    We have some ways to import libraries in our project:
    1) We can use CDN (Content Delivery Network) for importing libraries.
        - <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    2) We can use npm for importing libraries.
        - npm install axios
    3) We can download libraries and import them manually.
        - <script src="assets/scripts/axios.min.js"></script>
    
    axios is a library for sending HTTP requests.

    The difference between axios.js and axios.min.js is that axios.min.js is minified version of axios.js. 

 */


const activeCustomers = ['Max', 'Manuel'];

const inactiveCustomers = ['Anna', 'Chris', 'Manuel'];

const diff = _.difference(activeCustomers, inactiveCustomers);

console.log(diff);