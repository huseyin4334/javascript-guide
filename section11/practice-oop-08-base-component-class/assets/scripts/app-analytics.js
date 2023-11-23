console.log('Sending analytics...');


const id = setInterval((person, ...others) => {
    console.log(`Hello ${person.name} ${person.age}`);
    console.log(others);
}, 2000, {name: "Huseyin", age: 30}, 10, 20);

document.getElementById("analytics-btn")
    .addEventListener("click", () => {
        clearInterval(id);
        console.log('Clear interval');
    });