let tasks = [];

// Create Task
function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

// Read Tasks
function getTasks() {
    return tasks;
}

// Update Task
function updateTask(id, newName, newDescription) {
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage:
addTask(1, "Study", "Review JavaScript concepts");
addTask(2, "Exercise", "Go for a run");
console.log("Tasks:", getTasks());

updateTask(1, "Study JS", "Review Node.js and Express");
console.log("Updated Tasks:", getTasks());

deleteTask(2);
console.log("Final Tasks:", getTasks());
