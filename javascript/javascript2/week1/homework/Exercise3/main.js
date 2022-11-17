/*** hyfBay - get the okay'est products here ***/
const products = getAvailableProducts();
const productList = document.querySelector('ul');
productList.style.fontFamily = 'sans-serif';

function renderProducts(products) {
    products.forEach((product) => {
        const list = document.createElement('li');
        const list2 = document.createElement('li');
        list.innerText = `${product.name}`;
        list.setAttribute(
            "style", "font-size: 2rem; font-weight: 600");
        list2.innerText = `price: ${product.price} \n Rating: ${product.rating}`;
        productList.appendChild(list);
        productList.appendChild(list2);
    })
}

renderProducts(products);