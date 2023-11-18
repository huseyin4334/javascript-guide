const productList = new ProductList(undefined, 'app');

productList.push(
    new Product(
        'A Pillow',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rwh0WksvOp3tYZzM9X1vvw7Hiq6ZrR-MwolRvcVe_A&s',
        19.99,
        'A soft pillow!',
        'product-list'
    ),
    new Product(
        'A Carpet',
        'https://productimages.hepsiburada.net/s/394/375-500/110000418423833.jpg',
        89.99,
        'A carpet which you might like - or not.',
        'product-list'
    )
);

// productList.render();

// console.log(new Product());

// console.log(new Product("test", "https://test.test", "testArea", 15.99));



// const shop = new Shop(productList);

// shop.render();


/*

    static field, property, method, constructor, etc. are accessed by the class itself, not by the instances of the class

*/

class App {
    static init() {
        const shop = new Shop(productList);
        this.cart = shop.cart;
        shop.render();
    }

    static addToCart(product) {
        this.cart.addItem(product);
    }
}

App.init();

/* 
    toFixed() method is used to format a number using fixed-point notation
    - Syntax: numObj.toFixed([digits])
    -  78.90879098.toFixed(2) // "78.91"
*/