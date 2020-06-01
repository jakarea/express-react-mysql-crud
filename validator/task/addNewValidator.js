const validator = require('validator')

const validate = task => {
    let error = {}

    if (!task.title) {
        error.title = 'Please provide a title!'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate