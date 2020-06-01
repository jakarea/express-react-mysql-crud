const addNewValidator = require("../validator/task/addNewValidator");
const Task = require('./../models').Task
const { serverError, resourceError } = require('../util/error')

module.exports = {
    index(req, res) {
       //
    },
    show(req, res) {
       //
    },
    add(req, res) {
        let validate = addNewValidator(req.body);
        if (!validate.isValid) {
            return res.status(400).json(validate.error);
        }
        let {
            title,
            description,
            type,
            due_date,
            status,
        } = req.body;

        Task.create({
            title,
            description,
            type,
            due_date,
            status,
        })
        .then(task => {
            res.status(201).json({
                type: 'ok',
                status: 201,
                message: "New task added.",
                task
            });
        })
        .catch(error => serverError(res, error));
    },
    edit(req, res) {
        //
    },
    update(req, res) {
        //
    },
    destroy(req, res) {
        //
    }
}