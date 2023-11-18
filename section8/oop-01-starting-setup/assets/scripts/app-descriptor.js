/*
    Property Descriptors:
    - A property descriptor is an object that describes a property and its behavior.
    - Object.getOwnPropertyDescriptor(obj, prop)
    - Object.defineProperty(obj, prop, descriptor)
    - Object.defineProperties(obj, props)
    - Object.getOwnPropertyNames(obj)

    Property descriptor attributes:
    - value: The value associated with the property.
    - writable: true if and only if the value associated with the property may be changed.
    - get: A function which serves as a getter for the property, or undefined if there is no getter.
    - set: A function which serves as a setter for the property, or undefined if there is no setter.
    - configurable: true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
    - enumerable: true if and only if this property shows up during enumeration of the properties on the corresponding object.
*/

const p = {
    name: 'p',
    price: 10,
    quantity: 2
};


// I can lock the object to prevent changes to the object. But if it's deleted, it can be changed again.
console.log("Writable: ");
Object.defineProperty(p, 'name', { writable: false });

p.name = 'p2';

console.log(p); // {name: "p", price: 10, quantity: 2}

delete p.name;

p.name = 'p3';

console.log(p); // {name: "p3", price: 10, quantity: 2}


// We lock the object. It can't be deleted.
console.log("Configurable: ");
Object.defineProperty(p, 'name', { configurable: false });

delete p.name;

console.log(p); // {name: "p3", price: 10, quantity: 2}

p.name = 'p4';

console.log(p); // {name: "p4", price: 10, quantity: 2}


// I can not access to key name. So I can not iterate over the object.
console.log("Enumarete: ");
Object.defineProperty(p, 'price', { enumerable: false });

console.log(p); // {name: "p4", quantity: 2, price: 10}

console.log(Object.keys(p)); // (2) ["name", "quantity"]

console.log(Object.getOwnPropertyNames(p)); // (3) ["name", "price", "quantity"]

console.log(p.price); // 10

for (const key in p) {
    console.log(key); // name, quantity
}