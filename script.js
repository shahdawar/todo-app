const firstInput = document.getElementById("inputfirst");
const secondInput = document.getElementById("inputsecond");
const tasksDiv = document.getElementById("tasks");

let tasks = [];
function addTask() {
  const title = firstInput.value.trim();
  const description = secondInput.value.trim();

  if (title === "" || description === "") {
    alert("Please enter title and description");
    return;
  }

  let isduplicate = false;
  tasks.forEach((task) => {
    if (task.title === title && task.description === description) {
      isduplicate = true;
    }
  });
  if (isduplicate) {
    alert("Duplicated value change the titile or description !");
    return;
  }
  const task = {
    id: tasks.length + 1,
    title: title,
    description: description,
    status: "Pending",
  };

  tasks.push(task);
  displayTasks();
  firstInput.value = "";
  secondInput.value = "";
}
function displayTasks() {
  tasksDiv.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-card");
    if (task.status === "Completed") {
      taskElement.classList.add("completed");
    }
    taskElement.innerHTML = `<p><strong>Id:</strong>${task.id}</p>
    <p><strong>Title:  </strong>${task.title}</p>
    <p><strong>Description:  </strong>${task.description}</p>
    <p><strong>Status: </strong>${task.status}</p>
     <div class="tskbtns"><p><strong>Mark as complete: </strong> <button onclick="togglestatus(${task.id})">Click </button></p>
     <p><button onclick="deleteTask(${task.id})">Delete Task</button></div>`;
    tasksDiv.appendChild(taskElement);
  });
  console.log(tasks);
}
function togglestatus(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      if (tasks[i].status === "Pending") {
        tasks[i].status = "Completed";
      }
    }
  }
  displayTasks();
}
function deleteTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
    }
  }
  displayTasks();
}
