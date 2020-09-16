import "../component/product-list.js"
import courses from "../data/courses.js";

const main = () => {
    const cardProductContainer = document.querySelector(".card-product .container");
    const productContainer = document.createElement("product-list");
    productContainer.products = courses;
    cardProductContainer.appendChild(productContainer);
}

export default main;