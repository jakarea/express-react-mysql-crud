import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    tasks: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function removeTask(id) {
        const response = await fetch('http://localhost:4000/api/tasks/' + id, {
            method: 'DELETE',
        })
        let task = await response.json()
        //console.log(task)
        dispatch({
            type: 'REMOVE_TASK',
            payload: id
        });
    };

    async function addTask(task) {
        const response = await fetch('http://localhost:4000/api/tasks/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(task)
        })
        let added = await response.json()
        //console.log(added)
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    };

    async function editTask(task) {
        const response = await fetch('http://localhost:4000/api/tasks/'+ task.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(task)
        })
        let updated = await response.json()
        console.log(updated)
        dispatch({
            type: 'EDIT_TASK',
            payload: task
        })
    };

    async function allTask(tasks) {
        const response = await fetch('http://localhost:4000/api/tasks')
        tasks = await response.json()
        dispatch({
            type: 'ALL_TASK',
            payload: tasks.task
        });
    };

    return (<GlobalContext.Provider value={{
        tasks: state.tasks,
        allTask,
        removeTask,
        addTask,
        editTask
    }}>
        {children}
    </GlobalContext.Provider>);
}