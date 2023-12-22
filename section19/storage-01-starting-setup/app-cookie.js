console.log(document.cookie);

// max-age is in seconds. max-age is the expiration date. If we set it to 360, it will expire in 6 minutes
document.cookie = 'name=Max; max-age=360'; 

console.log(document.cookie);

// We can set the expiration date with the expires property
document.cookie = 'name=Manu expires=Fri, 31 Dec 2023 23:59:59 GMT;';

document.cookie = 'test=TEst';

// We can seperate cookies with a semicolon and a space
console.log(document.cookie.split(';'));