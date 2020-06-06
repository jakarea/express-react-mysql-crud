import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory,Link } from "react-router-dom";
import useForm from "./../context/useForm";
import validate from './../validator/Task';

const AddTask = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(submitTask, validate);

    const { addTask } = useContext(GlobalContext);
    const { title, description } = values
    let history = useHistory();
    function submitTask() {
        const newTask = {
            title,
            description
        }
        addTask(newTask);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="task">Title</label>
                        <input id="title" className={`form-control ${errors.title && 'is-invalid'}`} type="text" name="title" onChange={handleChange} value={values.title || ''} />
                        {errors.title && (
                            <p className="text-danger">{errors.title}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" value={description} onChange={(e) => handleChange(e)} className={` form-control ${errors.description && 'is-invalid'}` } id="description" rows="3"></textarea>
                        {errors.description && (
                            <p className="text-danger">{errors.description}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-warning">
                            <Link to='/'>Cancel</Link>
                        </button>
                        <button type="submit" className="btn btn-success pull-right">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default AddTask