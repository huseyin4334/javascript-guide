const userId = 'u123';

localStorage.setItem('uid', userId);

const storedId = localStorage.getItem('uid');

console.log(storedId === userId); // true

localStorage.removeItem('uid');


const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

localStorage.setItem('user', user);

const storedUser = localStorage.getItem('user');

console.log(storedUser === user); // false

localStorage.setItem('user2', JSON.stringify(user));

const storedUser2 = JSON.parse(localStorage.getItem('user2'));

console.log(storedUser2);