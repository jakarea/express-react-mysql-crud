const addNewValidator = require("../validator/task/addNewValidator");
const Task = require('./../models').Task
const { serverError } = require('../util/error')

module.exports = {
    all(req, res) {
        let path = req.protocol + '://' + req.get('host') + req.baseUrl
        let current_page = Number(req.query.page ? req.query.page < 1 ? 1 : req.query.page : 1)
        let per_page = 10
        let from = current_page > 1 ? (current_page - 1) * per_page + 1 : 1
        Task
            .findAndCountAll({
                offset: from,
                limit: per_page
            })
            .then(result => {
                let total = result.count
                let last_page = Math.ceil(result.count / per_page)
                let first_page_url = path + "?page=1"
                let last_page_url = path + "?page=" + Math.ceil(result.count / per_page)
                let next = current_page < Math.ceil(result.count / per_page) ? current_page + 1 : null
                let next_page_url = next === null ? null : path + "?page=" + next
                let prev = current_page > 1 ? current_page - 1 : null
                let prev_page_url = prev === null ? null : path + "?page=" + prev
                let to = current_page > 0 ? current_page * per_page : per_page
                res.status(200).json({
                    type: 'ok',
                    status: 200,
                    total,
                    pagination: {
                        per_page,
                        current_page,
                        last_page,
                        first_page_url,
                        last_page_url,
                        next_page_url,
                        prev_page_url,
                        path,
                        from,
                        to,
                    },
                    task: result.rows
                })
            })
            .catch(error => serverError(res, error));
    },

    show(req, res) {
        console.log(req.params.id)
        Task
            .findByPk(req.params.id).then(task => {
                res.status(200).json({
                    type: 'ok',
                    status: 200,
                    task
                })
            })
            .catch(error => serverError(res, error));
    },


    async remove(req, res) {
        let deleted = await Task.destroy({ where: { "id": req.params.id } })
        res.status(200).json({
            type: 'ok',
            status: 200,
            deleted
        })
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

    update(req, res) {
        let validate = addNewValidator(req.body);
        if (!validate.isValid) {
            return res.status(400).json(validate.error);
        }
        let task = {
            title,
            description,
            type,
            due_date,
            status,
        } = req.body;

        Task.update({
            title,
            description,
            type,
            due_date,
            status,
        }, {
            where: {
                "id": req.params.id
            }
        })
            .then(async updated => {
                let task = await Task.findByPk(req.params.id)
                res.status(201).json({
                    type: 'ok',
                    status: 201,
                    message: "Task updated.",
                    updated: updated[0],
                    task
                })
            })
            .catch(error => serverError(res, error));
    }
}