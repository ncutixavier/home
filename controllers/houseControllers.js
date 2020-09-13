const models = require('../database/models');

exports.getAllHouses = async (req, res) => {
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
        Houses
    })
}