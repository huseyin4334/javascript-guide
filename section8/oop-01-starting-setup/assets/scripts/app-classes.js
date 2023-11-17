class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    givingInfo() {
        console.log("Adding product...");
        console.log("Product: " + this);
        App.addToCart(this);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
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
            Here is very important to use bind(this) to pass the object to the function
            Because if we pass the function just like this: this.addToCart, it will be called but the this keyword will be undefined
            So we need to pass the object to the function, and the bind() method will do that for us
        */
        addToCartButton.addEventListener('click', this.givingInfo.bind(this));

        return prodEl;
    }
}

class ProductList {
    productList;

    constructor(productList) {
        this.productList = productList && productList.length > 1 ? productList : [];
    }

    push(...product) {
        this.productList.push(...product);
    }

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.productList) {
            const prodEl = prod.render();
            prodList.append(prodEl);
        }
        
        return prodList;
    }

};

class ShoppingCart {
    items = [];

    addItem(product) {
        this.items.push(product);
        const preparedArea = this.render();
        document.querySelector('.cart').replaceWith(preparedArea);
    }

    render() {
        const cartEl = document.createElement("section");

        cartEl.innerHTML = `
            <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
            <button>Order Now</button>
        `;

        cartEl.className = "cart";

        return cartEl;
    }

    get totalAmount() {
        return this.items.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0);
    }
}

class Shop {

    productList;
    cart = new ShoppingCart();
    
    constructor(productList) {
        this.productList = productList;
    }

    render() {
        const renderHook = document.getElementById('app');

        const cartEl = this.cart.render();
        const prodListEl = this.productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }

}