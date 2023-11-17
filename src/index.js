document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const taskText = input.value.trim();
      if (taskText !== "") {
          const taskItem = createTaskItem(taskText);
          list.appendChild(taskItem);
          input.value = "";
      }
  });

  function createTaskItem(taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", function () {
          list.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);

      return taskItem;
  }
});

