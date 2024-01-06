import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 ">
                <input
                    className='form-control'
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className='btn btn-secondary' type="submit">Add Task</button>
            </div>
        </form>
    );
};

export default TodoForm;