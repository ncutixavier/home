const models = require('../database/models');

exports.getAllHouses = async (req, res, next) => {
    try {
        const Houses = await models.House.findAll({
            include: [
                {
                    model: models.User,
                    as: 'landlord'
                }
            ]
        })
        res.status(200).send({
            status: 'success',
            Houses: Houses
        })
    } catch (error) {
        res.status(404).send({
            status: 'Fail',
            message: error.message
        })
    }
    next()
}