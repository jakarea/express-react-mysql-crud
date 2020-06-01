const router = require('express').Router()
const {add, edit, update, destroy, show} = require('../controllers/TaskController')

// Registration Route
router.post('/add', add)

module.exports = router