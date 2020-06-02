const router = require('express').Router()
const {all, add, edit, update, destroy, show} = require('../controllers/TaskController')

router.post('/', add)
router.get('/', all)
module.exports = router