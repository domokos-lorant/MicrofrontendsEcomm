import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  
  element.innerHTML = products;
}

// Context 1
// We are running products in isolation.
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");

  if (element) {
    mount(element);
  }
}

// Context 2
// We are running products inside container app.
export { mount };