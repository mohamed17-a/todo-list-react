// App.js
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  // useEffect to handle local storage
  useEffect(() => {
    // Load tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = (filterType) => {
    switch (filterType) {
      case 'all':
        // Show all tasks
        break;
      case 'completed':
        // Show completed tasks
        break;
      case 'active':
        // Show active tasks (not completed)
        break;
      default:
        break;
    }
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        filterTasks={filterTasks}
      />
    </div>
  );
};

export default App;

