const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://images.unsplash.com/photo-1581091019745-0e0b3b3b3c1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93JTIwcGlkb2x5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            price: 19.99,
            description: 'A soft pillow!'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://images.unsplash.com/photo-1581091019745-0e0b3b3b3c1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93JTIwcGlkb2x5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');

        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};


productList.render();