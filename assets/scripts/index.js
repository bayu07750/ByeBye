class ImageProduct {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

class Product {
  constructor(imageProduct, title, description, link) {
    this.imageProduct = imageProduct;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

const products = [
  new Product(
    new ImageProduct("assets/personal_website.svg", "Personal Website"),
    "Personal Website",
    "Build your Personal Website with",
    "#personal"
  ),
  new Product(
    new ImageProduct("assets/shopping_website.svg", "Shopping Website"),
    "Shopping Website",
    "Build your Shopping Website with",
    "#shopping"
  ),
  new Product(
    new ImageProduct("assets/wordpress_theme.svg", "WordPress Website"),
    "Wordpress Theme",
    "Build your Wordpress themes with",
    "#wordpress"
  )
];

const cardItem = (product) => {
  return /* html */ `<div class="card flex-1 dflex">
    <img src="${product.imageProduct.src}" width="100%" alt="${product.imageProduct.alt}" />
    <article class="text-center">
      <h3>${product.title}</h3>
      <p class="ptop-10">${product.description} <strong>ByeBye</strong></p>
      <br />
      <a href="${product.link}" class="btn btn-small">More</a>
    </article>
  </div>`;
};

const cardContainer = document.querySelector("main #products > div.dflex");
let result = "";
for (const product of products) {
  result += cardItem(product);
}
cardContainer.innerHTML = result;

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("slide");
});