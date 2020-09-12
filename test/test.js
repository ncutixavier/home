const chai = require('chai')
const chaiHttp = require('chai-http')
const router = require('../routes/userRoutes')
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
                    // res.body.should.be.a('array')
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

});
