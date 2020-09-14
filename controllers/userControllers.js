const models = require('../database/models');

exports.getAllUsers = async (req, res) => {
    try {
        const Users = await models.User.findAll()
        res.status(200).send({
            status: 'success',
            Users
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: error.message
        })
    }
}

exports.getUser = async (req, res) => {
    const user = await models.User.findAll({
        where: {
            id: req.params.id
        }
    })
    if (user.length == 0) {
        res.status(400).send({
            status: 'Fail',
            message: 'Invalid user id'
        })
    } else {
        res.status(200).send({
            status: 'Success',
            user
        })
    }
}