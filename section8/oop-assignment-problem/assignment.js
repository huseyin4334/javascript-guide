class Course {
    title;
    length;

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        return (+this.price.replace('$', '') / this.length).toFixed(2);
    }

    description() {
        return `${this.title} is ${this.length} hours. Cost is ${this.price}. You will paid \$${this.calculate()} per hour`;
    }

    set price(val) {
        this._price = Math.abs(val);
    }

    get price() {
        return `\$${this._price}`
    }
}

console.log(
    new Course(
        "test",
        234,
        45.99
    )
);

console.log(
    new Course(
        "test2",
        234,
        45.99
    )
);

const c = new Course(
    "test2",
    234,
    45.99
);

console.log(c.description());


class PracticalCourse extends Course {

    numOfExercises;

    constructor(title, length, price) {
        super(title, length, price);
    }

}

class TheoreticalCourse extends Course {

    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log("This is a theoratical course");
    }

}

const theoratical = new TheoreticalCourse(
    "test4545",
    24,
    88.99
);

console.log(theoratical.price);
console.log(theoratical.description());