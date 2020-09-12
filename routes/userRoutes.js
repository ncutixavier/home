const express = require('express')
const userController = require('../controllers/userControllers')

const router = express.Router()

router
    .route('/')
    .get(userController.getAllUsers)
    // .post(userController.createNewUser)

router
    .route('/:id')
    .get(userController.getUser)

module.exports = router