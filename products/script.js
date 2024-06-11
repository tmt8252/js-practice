async function getData() {
  const rowData = await fetch(
    "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1718019896/API/ProductsData"
  );
  const obj = await rowData.json();

  const container = document.getElementById("container");

  obj.map((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img1 = document.createElement("img");
    img1.src = product.img1;
    card.appendChild(img1);

    const img2 = document.createElement("img");
    img2.src = product.img2;
    card.appendChild(img2);
    
    const title = document.createElement("p");
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `Price - $${product.price}`;
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

    const subCategory = document.createElement("p");
    subCategory.textContent = `Sub Category - ${product.subCategory}`;
    card.appendChild(subCategory);

    const button = document.createElement("button")
    button.textContent = "Add to Cart";
    card.appendChild(button)

    container.appendChild(card);
    

    //! when user click add to cart button.. you have to store into localStorage and show into a
    //! new div using if else and boolean.. remove the product from new div and localStorage
  }).join("")
}

getData();
