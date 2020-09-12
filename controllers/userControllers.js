const users = [
    {
        id: 0,
        name: 'Emily Nova',
        email: 'emilynova@gmail.com'
    },
    {
        id: 1,
        name: 'Boston Man',
        email: 'manboston@gmail.com'
    },
    {
        id: 2,
        name: 'Rich Dotcom',
        email: 'dotcom@gmail.com'
    }
]

exports.getAllUsers = (req, res) => {
    res.status(200).send({
        status: 'Success',
        users
    })
}

exports.getUser = (req, res) => {
    const user = users.find(task => task.id == parseInt(req.params.id))
    if (!user) {
        res.status(404).send({
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
