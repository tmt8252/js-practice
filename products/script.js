const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartItems);

async function getData() {
  const rowData = await fetch(
    "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI"
  );
  const { earbud, tshirt, shoes, tshirtWomen } = await rowData.json();

  const dataArr = [...earbud, ...tshirt, ...shoes, ...tshirtWomen];

  const container = document.getElementById("container");

  dataArr
    .map((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img1 = document.createElement("img");
      img1.src = product.img1;
      card.appendChild(img1);

      const img2 = document.createElement("img");
      img2.src = product.img3;
      card.appendChild(img2);

      const title = document.createElement("p");
      title.textContent = product.title;
      card.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `Price - Rs.${product.price}`;
      card.appendChild(price);

      const discount = document.createElement("p");
      discount.textContent = `Discount - ${product.discount}%`;
      card.appendChild(discount);

      const qty = document.createElement("p");
      qty.textContent = `Quantity - ${product.qty}`;
      card.appendChild(qty);

      const category = document.createElement("p");
      category.textContent = `Category - ${product.category}`;
      card.appendChild(category);

      const button = document.createElement("button");
      button.textContent = "Add to Cart";
      card.appendChild(button);

      button.addEventListener("click", () => {
        addCartItems(product);
      });
      container.appendChild(card);

      //! when user click add to cart button.. you have to store into localStorage and show into a
      //! new div using if else and boolean.. remove the product from new div and localStorage
    })
    .join("");
}

getData();

const addCartItems = (product) => {
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const toggleCart = () => {
  const cartSection = document.getElementById("cartSection");

  if (cartSection.getAttribute("class") == "cart cartNotActive") {
    cartSection.setAttribute("class", "cart cartActive");
    updateCart();
  } else {
    cartSection.setAttribute("class", "cart cartNotActive");
  }
};

const updateCart = () => {
  const cartSection = document.getElementById("cartSection");
  cartSection.innerHTML = "";

  console.log(cartItems);

  cartSection.innerHTML = cartItems
    .map((item) => {
      return `
      <div class="card">
        <img src="${item.img1}" />
        <p>Title : ${item.title}</p>
        <p>Price : ${item.price}</p>
        <button onclick="removeCartItems(item)">Remove Item</button>
      </div>
    `;
    })
    .join("");

};

const removeCartItems = (item) => {
  const index = cartItems.indexOf(item);
  cartItems.splice(index, 1);
};
