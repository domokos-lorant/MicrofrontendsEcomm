import { mount as mountProduct } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");

mountProduct(document.querySelector("#products-section"));
mountCart(document.querySelector("#cart-section"));