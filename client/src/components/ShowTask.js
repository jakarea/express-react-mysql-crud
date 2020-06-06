import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";

const ShowTask = (route) => {

    const { tasks } = useContext(GlobalContext);
    const [selectedTask, setSeletedTask] = useState({ id: null, title: '', description: '', status: '' });
    const currentTaskId = route.match.params.id;

    useEffect(() => {
        const taskId = currentTaskId;
        const selectedTask = tasks.find(selected => selected.id === parseInt(taskId));
        setSeletedTask(selectedTask);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{selectedTask.title}</h5>
                        <p className="card-text">{selectedTask.description}</p>
                        <Link to={`/${selectedTask.id}/edit`}>
                            <button type="button" class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ShowTask;