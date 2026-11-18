import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(event) {
    event.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h2>My Todo List</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add your first task!</p>
      )}
    </div>
  );
}

export default TodoList;