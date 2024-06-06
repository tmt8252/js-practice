const nestingNavigation = [
  {
    title: "products",
    values: [
      {
        title: "electronics",
        values: ["mobiles", "laptops", "earbuds"],
      },
      {
        title: "clothes",
        values: ["shirts", "tshirts"],
      },
    ],
  },
  {
    title: "privacy policy",
    values: [
      {
        title: "policy One",
      },
      {
        title: "policy two",
        values: ["p1", "p2"],
      },
    ],
  },
];

const a = [1, 5, 3, 7, 9, 4];

console.log(a.includes(10));

console.log(JSON.stringify(nestingNavigation));

// const addList = (items) => {
//   const ul = document.createElement("ul");

//   items.map((a) => {
//     const li = document.createElement("li");
//     li.innerHTML = a.title;

//     if (a.values && Array.isArray(a.values)) {

//     }
//   });
//   ul.appendChild(li);
// };

// const list = document.getElementById("list");

// list.appendChild(addList(nestingNavigation));

const list = document.getElementById("list");

list.innerHTML = nestingNavigation
  .map((a) => {
    return `
    <ul>
      <li>${a.title}
        <ul>
          ${a.values.map((b) => {
            return `<li>${b.title}</li>`;
          })}
        </ul>
      </li>
    </ul>
  `;
  })
  .join("");
