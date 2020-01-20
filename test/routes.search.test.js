process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : search', () => {

    beforeEach(() => {
        return knex.migrate.rollback()
            .then(() => { return knex.migrate.latest(); })
            .then(() => { return knex.seed.run() })
    });

    afterEach(() => {
        return knex.migrate.rollback();
    });

    describe('GET /api/v1/search?swing_trade_quantity=13&email=mjaojr@gmail.com&current_broker=1', () => {
        it('should return brokers price based on query string', (done) => {
            chai.request(server)
                .get('/api/v1/search?swing_trade_quantity=13&email=mjaojr@gmail.com&current_broker=1')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data.length.should.eql(2);

                    res.body.data[0].should.include.keys(
                        'broker_id', 'broker_name', 'swing_trade_price_in_cents'
                    );
                    done();
                });
        });
    });
});