const router = require('express').Router()
const {all, add, update, remove, show} = require('../controllers/TaskController')

router.post('/', add)
router.get('/', all)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', remove)
module.exports = router