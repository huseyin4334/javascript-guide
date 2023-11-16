const mov = {
    set title(val) {
        if (val.trim() === '') {
            this._title = 'DEFAULT';
            return;
        }
        this._title = val;
    },
    get title() {
        return this._title.toUpperCase();
    },
};

// When we change or read variable, object will call set and get function.
// If you define just 1 function, you can not access other function.
mov.title = 'abc';
console.log(mov.title);

// But we can access the _title variable too.

for (const key in mov) {
    console.log(key);
}

const mov2 = {
    set title(val) {
        if (val.trim() === '') {
            this._title = 'DEFAULT';
            return;
        }
        this._title = val;
    }
};

console.log(mov2.title);

try {
    mov2.title = 'abc';
    console.log(mov2.title);
    console.log(mov2);
    console.log(mov2._title);
} catch (error) {
    console.log(error);
}