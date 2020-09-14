const models = require('../database/models');

exports.getAllHouses = async (req, res) => {
    try {
        const houses = await models.House.findAll({
            include: [
                {
                    model: models.User,
                    as: 'landlord'
                }
            ]
        })
        res.status(200).send({
            status: 'success',
            houses
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: error.message
        })
    }
}

exports.getHouse = async (req, res) => {
    const house = await models.House.findAll({
        where: { id: req.params.id },
        include: [
            { model: models.User, as: 'landlord' }
        ]
    })
    console.log(house.length)
    if (house.length == 0) {
        res.status(404).send({
            status: 'Fail',
            message: 'Invalid house id'
        })
    } else {
        res.status(200).send({
            status: 'Success',
            house
        })
    }
}