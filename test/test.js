const chai = require('chai')
const chaiHttp = require('chai-http')
// const server = require('../routes/userRoutes')
const server = require('../app')

//Assertion style
chai.should()
chai.use(chaiHttp)

//Call restful api
describe('Home API', () => {

    //Test welcome
    describe('GET /', () => {
        it('It should get welcome', async () => {
            try {
                const res = await chai.request(server)
                res
                    .get('/')
                    .end((err, res) => {
                        res.should.have.status(200)
                    })
            } catch (error) {
                console.log(error)
            }
        });
    });

    //Test to get all users
    describe('GET /api/v1/users', () => {
        it('It should get all users', async () => {
            try {
                const res = await chai.request(server)
                res
                    .get('/api/v1/users')
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')

                    })
            } catch (error) {
                console.log(error)
            }
        });
    });

    //Test to get user by id
    describe('GET /api/v1/users/:id', () => {
        // it('It should not get user based on id', async () => {
        //     try {
        //         const userID = 123
        //         const res = await chai.request(server)
        //         res
        //             .get('/api/v1/users/' + userID)
        //             .end((err, res) => {
        //                 res.should.have.status(400)
        //                 res.body.should.have.property('message')
        //                 res.body.should.have.property('message').eq('Invalid user id')

        //             })
        //     } catch (error) {
        //         console.log(error)
        //     }
        // });

        it('It should get user based on id', async () => {
            try {
                const userID = 1
                const res = await chai.request(server)
                res
                    .get('/api/v1/users/' + userID)
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.have.property('user')

                    })
            } catch (error) {
                console.log(error)
            }
        });
    });

    //Test to get all houses 
    describe('GET /api/v1/houses', () => {
        it('It should get all houses', async () => {
            try {
                const res = await chai.request(server)
                res
                    .get('/api/v1/houses')
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.be.property('houses')

                    })
            } catch (error) {
                console.log(error)
            }
        });
    });

    //Test to get house by id
    describe('GET /api/v1/houses/:id', () => {
        it('It should not get house based on id', async () => {
            try {
                const houseID = 12
                const res = await chai.request(server)
                res
                    .get('/api/v1/houses/' + houseID)
                    .end((err, res) => {
                        res.should.have.status(404)
                        res.body.should.have.property('message')
                        res.body.should.have.property('message').eq('Invalid house id')

                    })
            } catch (error) {
                console.log(error)
            }
        });

        it('It should get house based on id', async () => {
            try {
                const houseID = 1
                const res = await chai.request(server)
                res
                    .get('/api/v1/houses/' + houseID)
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.have.property('house')

                    })
            } catch (error) {
                console.log(error)
            }
        });
    });
});
