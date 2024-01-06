import React from 'react';

const TodoList = ({ tasks, deleteTask, toggleCompletion, filterTasks }) => {
    //tasks styling
    const styleTasks = 'd-flex flex-row justify-content-around text-light mb-1 w-50 rounded p-1'
    //filterTasks function to filter tasks based on completion status
    return (
        <div className='d-flex flex-column align-items-center container'>
            {tasks.map((task) => (
                <div key={task.id} className={task.completed ? 'completed bg-success ' + styleTasks : 'bg-secondary ' + styleTasks}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleCompletion(task.id)}
                    />
                    <span>{task.text}</span>
                    <button className='btn btn-danger text-light' onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;