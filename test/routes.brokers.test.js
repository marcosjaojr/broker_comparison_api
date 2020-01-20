process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : brokers', () => {

    beforeEach(() => {
        return knex.migrate.rollback()
            .then(() => { return knex.migrate.latest(); })
            .then(() => { return knex.seed.run() })
    });

    afterEach(() => {
        return knex.migrate.rollback();
    });

    describe('GET /api/v1/brokers', () => {
        it('should return all brokers', (done) => {
            chai.request(server)
                .get('/api/v1/brokers')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data.length.should.eql(4);

                    res.body.data[0].should.include.keys(
                        'id', 'name', 'tax_id'
                    );
                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/1', () => {
        it('should return a single broker', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/1')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data.length.should.eql(1);

                    res.body.data[0].should.include.keys(
                        'id', 'name', 'tax_id'
                    );
                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/99999999', () => {
        it('should throw an error if movie does not exist', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/99999999')
                .end((err, res) => {
                    should.exist(err);

                    res.status.should.eql(404);

                    res.body.status.should.eql('error');

                    res.body.message.should.eql('That broker does not exist.');

                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/1/price-table', () => {
        it('should return broker\'s current price table', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/1/price-table')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data[0].should.include.keys([
                        'created_at', 'updated_at', 'valid_from', 'broker_id', 'stock_price_table'
                    ]);

                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/9999999/price-table', () => {
        it('should throw an error if broker does not exist', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/9999999/price-table')
                .end((err, res) => {
                    should.exist(err);

                    res.status.should.eql(404);

                    res.body.status.should.eql('error');

                    res.body.message.should.eql('That broker does not exist.');

                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/2/price-table', () => {
        it('should return empty stock price table list if there is not stock price table', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/2/price-table')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data[0].stock_price_table.should.eql([]);

                    done();
                });
        });
    });

    describe('GET /api/v1/brokers/3/price-table', () => {
        it('should return empty price table list if there is not valid price table', (done) => {
            chai.request(server)
                .get('/api/v1/brokers/3/price-table')
                .end((err, res) => {
                    should.not.exist(err);

                    res.status.should.eql(200);

                    res.body.status.should.eql('success');

                    res.body.data.should.eql([]);

                    done();
                });
        });
    });
});