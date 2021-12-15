import {React, useState } from 'react'


function TaskManager() {
    const[title, setTitle]= useState('');
    const [tasks, setTasks]=useState([]);



    return (
        <div>
            <h1>To do list</h1>
            <p>Pending tasks: {tasks.length}</p>
            
            <form onSubmit={(event) => {event.preventDefault();
            setTasks([title, ...tasks]);
            setTitle('');
            }}>
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type='text'
            />
            <button type='submit'>
                Add Task
            </button>
            </form>
            <ul>
            {tasks.map(task =>{
                return <li onClick={() => {
                   setTasks(tasks.filter((t)  => t != task)); 
                }}>{task}</li>
            })}
                
            </ul>
           {tasks.length > 0 ? (
               <button
               onClick={() => {
                   setTasks([]);
                
               }}
               >Complete all tasks</button>
           ) : (<div />)
           }

            
        </div>
    )
}

export default TaskManager;
