const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/tasks', require('./routers/task'))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To express-react-mysql-crud-demo app Active API [POST] ./api/task/add'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)
})