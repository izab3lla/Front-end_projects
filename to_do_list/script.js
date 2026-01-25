const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const spanText = document.createElement("span");
  spanText.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  const doneBtn = document.createElement("span");
  doneBtn.textContent = "✔";
  doneBtn.classList.add("done");

  doneBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  buttonsDiv.appendChild(doneBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(spanText);
  li.appendChild(buttonsDiv);

  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";

  document.querySelectorAll(".done").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("li").classList.toggle("completed");
      saveTasks();
    });
  });

  document.querySelectorAll(".delete").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("li").remove();
      saveTasks();
    });
  });
}

loadTasks();
