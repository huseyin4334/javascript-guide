/*
    Local Storage
    - Local storage is a way to store data in the browser and it will persist even if you close the browser
    - Local storage is a key value store
    - Values can only be strings
    - When you refresh the page, the data will still be there

    Session Storage
    - Session storage is a way to store data in the browser and it will persist even if you close the browser
    - Session storage is a key value store
    - Values can only be strings
    - When you refresh the page, the data will be gone. Because it is session storage, it will only persist as long as the session is active

    Cookies
    - Cookies are a way to store data in the browser and it will persist even if you close the browser
    - Cookies are a key value store
    - Values can only be strings
    - When you refresh the page, the data will still be there
    - Cookies have an expiration date
    - Cookies can setable by the server or by the client. We can not set cookies without server interaction.
        - HttpOnly cookies can only be set by the server
        - If it's not the checked, it can be set by the browser javascript
    - Cookies are limited to 4kb of data

    IndexedDB
    - IndexedDB is a way to store data in the browser and it will persist even if you close the browser
    - IndexedDB is a key value store
    - Values can be any type
    - When you refresh the page, the data will still be there
    - IndexedDB is a NoSQL database
    - IndexedDB is async
    - IndexedDB is a transactional database
    - IndexedDB is a client side database
    - Some callbacks are required to use IndexedDB
        - onupgradeneeded is the callback that will run when the database is created
        - onsuccess is the callback that will run when the database is opened (That means the database already exists. And we can read or write data to it)
        - onerror is the callback that will run when the database fails to open
*/

let db;

const openedDbCon = indexedDB.open('test-store', 1); // This will create a database called test-store with version 1

openedDbCon.onsuccess = function(event) {
    console.log(event);
    console.log('Database Opened!');
}

openedDbCon.onupgradeneeded = function(event) {
    console.log(event);
    console.log('Database Created!');
    someEvent(event);
}

openedDbCon.onerror = function(event) {
    console.log(event);
    console.log('Error!');
}

function someEvent(event) {
    db = event.target.result; // This is the database that was created

    // We created a table called products with a keyPath of id
    const objStore = database.createObjectStore('products', {keyPath: 'id'});

    // When creation is complete, this will run
    objStore.transaction.oncomplete = function(event) {
        console.log(event);
        console.log('Transaction completed');

        // We open a transaction to add or read data to the table
        const openedTransaction = database.transaction('products', 'readwrite').objectStore('products');

        openedTransaction.add({
            id: 'p1',
            title: 'A First Product',
            price: 12.99,
            tags: ['Expensive', 'Luxury']
        });

        openedTransaction.oncomplete = function(event) {
            console.log(event);
            console.log('Transaction completed!');
        }

        const getMeth = openedTransaction.get('p1');
        
        openedTransaction.onsuccess = function() {
            console.log(getMeth.result);
        }
    }
}