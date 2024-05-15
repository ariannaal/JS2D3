const form = document.getElementById("newTask");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(event)
    const nameTask = document.getElementById("task-name");
    const taskValue = nameTask.value;
    // console.log(taskValue)
    const ul = document.getElementById("unordered-list");
    const li = document.createElement("li");
    li.innerText = taskValue
    ul.appendChild(li);
    nameTask.value = "";




})