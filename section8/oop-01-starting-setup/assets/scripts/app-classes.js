// inheritance

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(hookId) {
        console.log("Root element is", hookId);
        this.hookId = hookId;
    }

    addElement(tag, className, attributes) {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                element.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(element);

        return element;
    }
}




class Product extends Component {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, price, description, hookId) {
        super(hookId);
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    givingInfo = () =>{
        console.log("Adding product...");
        console.log("Product: " + this);
        App.addToCart(this);
    }

    render() {
        const prodEl = this.addElement('li', 'product-item', [
            new ElementAttribute('id', 'item-' + this.id)
        ]);
        prodEl.innerHTML = `
            <div>
                <img src="${this.imageUrl}" alt="${this.title}" >
                <div class="product-item__content">
                    <h2>${this.title}</h2>
                    <h3>\$${this.price}</h3>
                    <p>${this.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;


        const addToCartButton = prodEl.querySelector('button');

        /*
            SOLUTION 1: Using bind() method
            Here is very important to use bind(this) to pass the object to the function
            Because if we pass the function just like this: this.addToCart, it will be called but the this keyword will be undefined
            So we need to pass the object to the function, and the bind() method will do that for us
        */
        // addToCartButton.addEventListener('click', this.givingInfo.bind(this));

        /*
            SOLUTION 2: Using arrow function
            Arrow function will automatically bind the this keyword to the object

            addToCartButton.addEventListener('click', () => {
                this.givingInfo();
            });
        */

        /*
            SOLUTION 3: We can change the function like this:
            givingInfo = () => {
                ....
            };

            It will automatically bind the this keyword to the object
        */
        addToCartButton.addEventListener('click', this.givingInfo);
    }
}

class ProductList extends Component {
    productList;

    constructor(productList, hookId) {
        super(hookId);
        this.productList = productList && productList.length > 1 ? productList : [];
    }

    push(...product) {
        this.productList.push(...product);
    }

    render() {
        const prodList = this.addElement('ul', 'product-list', [
            new ElementAttribute('id', 'product-list')
        ]);
       
        for (const prod of this.productList) {
            prod.render();
        }
    }

};


class ShoppingCart extends Component {
    items = [];

    constructor(hookId) {
        super(hookId);
    }

    addItem(product) {
        this.items.push(product);
        
        document.getElementById('cart')
            .querySelector('h2')
            .textContent = `Total: ${this.formattedTotalAmount()}`;
    }

    render() {

        const cartEl = this.addElement("section", "cart", [
            new ElementAttribute("id", "cart")
        ]);

        cartEl.innerHTML = `
            <h2>Total: \$${this.formattedTotalAmount()}</h2>
            <button>Order Now</button>
        `;
    }

    get totalAmount() {
        return this.items.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0);
    }

    formattedTotalAmount() {
        return `$${this.totalAmount.toFixed(2)}`;
    }
}

class Shop {

    productList;
    cart = new ShoppingCart('app');
    
    constructor(productList) {
        this.productList = productList;
    }

    render() {
        this.cart.render();
        this.productList.render();
    }

}


/*
    Super keyword
    - The super keyword is used to access and call functions on an object's parent.
    - The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.
    - Syntax: super([arguments]); // calls the parent constructor.

    We can use super() in the constructor to call the parent constructor and super.method() to call the parent method.

    We can call child methods from the parent class, but we have to consider order of the code.

    sper called before this keyword usage.
*/

/*
    Private fields:
    - Private fields are a stage 3 proposal for JavaScript and are available as an experimental feature of TypeScript.
    - Private fields are only accessible within their containing class.
    - # is used to declare private fields.
    - You can see error in editor, but it will work in the browser.
    - Syntax: #field = value;
    - Syntax: #method() { ... }
*/

/*
    typeof and instanceof:
    - typeof: The typeof operator returns a string indicating the type of the unevaluated operand.
    - Syntax: typeof operand
    - Syntax: typeof (operand)
    - Syntax: typeof operand1, operand2, ...

    - instanceof: The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
    - Syntax: object instanceof constructor
        - Component instanceof ProductList // false
        - ProductList instanceof Component // true
        - const p = new ProductList(); 
            - p instanceof Component // true
            - p instanceof ProductList // true
            - p instanceof ShoppingCart // false
*/