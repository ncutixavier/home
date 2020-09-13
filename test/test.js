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
        it('It should get welcome', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        });
    });

    //Test to get all users
    describe('GET /api/v1/users', () => {
        it('It should get all users', (done) => {
            chai.request(server)
                .get('/api/v1/users')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        });
    });

    //Test to get all houses 
    describe('GET /api/v1/houses', () => {
        it('It should get all houses', (done) => {
            chai.request(server)
                .get('/api/v1/houses')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('Houses')
                    done()
                })
        });

        // it('It should not get all houses', (done) => {
        //     chai.request(server)
        //         .get('/api/v1/houses')
        //         .end((err, res) => {
        //             res.should.have.status(404)
        //             res.body.should.have.property('message')
        //             done()
        //         })
        // });
    });

    //Test to get all users
    describe('GET /api/v1/users/:id', () => {
        it('It should not get user based on id', (done) => {
            const userID = 12
            chai.request(server)
                .get('/api/v1/users/' + userID)
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.have.property('message')
                    res.body.should.have.property('message').eq('Invalid user id')
                    done()
                })
        });

        it('It should get user based on id', (done) => {
            const userID = 1
            chai.request(server)
                .get('/api/v1/users/' + userID)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('user')
                    done()
                })
        });
    });

});
