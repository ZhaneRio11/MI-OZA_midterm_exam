// Task array to store tasks
const tasks = [];
let nextId = 1; // Auto-incrementing ID

// Function to add a new task
function addTask(name, description) {
    const task = {
        id: nextId++,  // Unique ID
        name,
        description
    };
    tasks.push(task);
    console.log("Task added:", task);
}

// Function to view all tasks
function viewTasks() {
    console.log("Task List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found!");
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log("Task deleted:", removedTask[0]);
    } else {
        console.log("Task not found!");
    }
}

// Testing the CRUD functions
addTask("Study JavaScript", "Complete Node.js module");
addTask("Do Homework", "Finish math exercises");

console.log("\nBefore Update:");
viewTasks();

updateTask(1, "Study Node.js", "Review Express.js tutorial");

console.log("\nAfter Update:");
viewTasks();

deleteTask(2);

console.log("\nAfter Deletion:");
viewTasks();