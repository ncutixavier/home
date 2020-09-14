const express = require('express')
const userRoute = require('./routes/userRoutes')
const houseRoute = require('./routes/houseRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'Success',
        message: 'Welcome Here'
    })
})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/users', userRoute)
app.use('/api/v1/houses', houseRoute)

module.exports = app