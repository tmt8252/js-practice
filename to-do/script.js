//? value taken from user stored in newTask

const newTask = document.getElementById("newTask");

//! load todo
const todo = JSON.parse(localStorage.getItem("todo")) || [];

//? getting sections adn storing in variables

// const todoDiv = document.getElementById("todo");
const list = document.getElementById("incompleteTasks");

//! create list
const todoRender = () => {
  list.innerHTML = "";

  todo.forEach((values, index) => {
    const li = document.createElement("li");
    //? created input nad button
    const input = document.createElement("input");
    input.value = values;
    input.readOnly = true;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class", "delete");
    deleteButton.onclick = () => {
      todo.splice(index, 1);
      saveTodo();
      todoRender();
    };
    list.appendChild(li);
    list.appendChild(input);
    list.appendChild(deleteButton);
  });
};

todoRender()


//! save todo into localStorage
const saveTodo = () => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

let add = () => {
  const newTodo = newTask.value;
    todo.push(newTodo);
    saveTodo();
    todoRender();
    newTask.value = "";
  
};
