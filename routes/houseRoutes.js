const houseController = require('../controllers/houseControllers')
const express = require('express')

const router = express.Router()

router
    .route('/')
    .get(houseController.getAllHouses)

router
    .route('/:id')
    .get(houseController.getHouse)

module.exports = router