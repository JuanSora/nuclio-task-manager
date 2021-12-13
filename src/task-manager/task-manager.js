import {React, useState } from 'react'


function TaskManager() {
    return (
        <div>
            <h1>To do list</h1>
            <p>Pending tasks</p>
            <p>Completed tasks</p>
            <form>
            <input
                 type='text'
            />
            <button type='submit'>
                Añadir tarea
            </button>
            </form>

            
        </div>
    )
}

export default TaskManager;
