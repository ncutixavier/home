const express = require('express')
const userRoute = require('./routes/userRoutes')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'Success',
        message: 'Welcome Here'
    })
})

app.use('/api/v1/users', userRoute)

module.exports = app