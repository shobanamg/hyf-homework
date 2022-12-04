/*** hyfBay - get the okay'est products here ***/
const products = getAvailableProducts();
const productUl = document.querySelector(".product-ul");

function renderProducts(products) {
  products.forEach((product) => {
    const productList = document.createElement("li");
    productList.classList.add("product-list");

    productList.innerHTML = `<li class="product-name">${product.name}</li>
    <li class="product-price">price: ${product.price}</li>
    <li class="product-rating">Rating: ${product.rating}</li>`;
    productUl.appendChild(productList);
  });
}

//renderProducts(products);

const searchProduct = document.querySelector(".search-product");

searchProduct.addEventListener("input", (event) => {
  const inputValue = event.target.value.toLowerCase();
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue)
  );
  productUl.innerHTML = "";
  renderProducts(filteredProduct);
});

const searchPrice = document.querySelector(".search-price");

searchPrice.addEventListener("input", (event) => {
  const inputPrice = event.target.value;
  const filteredPrice = products.filter(
    (product) => product.price <= inputPrice
  );
  productUl.innerHTML = "";
  renderProducts(filteredPrice);
  console.log(filteredPrice);
});

const button = document.querySelector(".btn");

button.addEventListener("click", () => location.reload());
