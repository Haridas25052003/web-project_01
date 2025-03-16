// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    // Create a new list item for the task
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="complete" onclick="completeTask(this)">Complete</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
  
    // Append the new task to the task list
    document.getElementById("task-list").appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  
  // Function to mark a task as complete
  function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  