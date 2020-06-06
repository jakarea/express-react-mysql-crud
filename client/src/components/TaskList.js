import React, { Fragment, useContext,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const TaskList = () => {
    const { tasks, removeTask, editTask, allTask } = useContext(GlobalContext);
    useEffect(() => {
        allTask()
      },[])
    
    return (
        <Fragment>
            <div className="container">
                <div className="col">
                    {tasks.length > 0 ?
                        <ul className="list-group list-group-flush">
                            {tasks.map(task => (
                                <div>
                                    <li key={task.id} className="list-group-item d-flex">
                                        <span class="h3">{task.title}</span>&nbsp;
                                        <button onClick={() => removeTask(task.id)} type="button" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>&nbsp;
                                        <Link to={`/${task.id}/edit`}>
                                            <button onClick={() => editTask(task.id)} type="button" class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>&nbsp;
                                        </Link>
                                        <Link to={`/${task.id}`}>
                                            <button type="button" class="btn btn-success"><i class="fa fa-eye" aria-hidden="true"></i></button>
                                        </Link>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>}
                </div>
            </div>
        </Fragment>
    )
}