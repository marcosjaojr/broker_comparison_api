const Router = require('koa-router');
const queries = require('../db/queries/brokers');

const router = Router();
const BASE_URL = '/api/v1/brokers';

router.get(BASE_URL, async (ctx) => {
    try {
        const brokers = await queries.getAllBrokers();
        ctx.body = {
            status: 'success',
            data: brokers
        };
    } catch (err) {
        console.log(err)
    }
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const brokers = await queries.getSingleBroker(ctx.params.id);
        if (!brokers || !brokers.length) {
            ctx.status = 404;
            return ctx.body = {
                status: 'error',
                message: 'That broker does not exist.'
            };
        }

        return ctx.body = {
            status: 'success',
            data: brokers
        };

    } catch (err) {
        console.log(err);
    }
});

router.get(`${BASE_URL}/:id/price-table`, async (ctx) => {
    try {
        const brokers = await queries.getSingleBroker(ctx.params.id);

        if (!brokers || !brokers.length) {
            ctx.status = 404;
            return ctx.body = {
                status: 'error',
                message: 'That broker does not exist.'
            };
        }

        const brokerPriceTable = await queries.getBrokerCurrentPriceTable(brokers[0].id);

        if (!brokerPriceTable || !brokerPriceTable.length) {
            return ctx.body = {
                status: 'success',
                data: []
            }
        }

        const priceTables = await queries.getPriceTables(brokerPriceTable[0].id);

        ctx.body = {
            status: 'success',
            data: [{
                id: brokerPriceTable[0].id,
                broker_id: brokerPriceTable[0].broker_id,
                created_at: brokerPriceTable[0].created_at,
                updated_at: brokerPriceTable[0].updated_at,
                valid_from: brokerPriceTable[0].valid_from,
                valid_thru: brokerPriceTable[0].valid_thru,
                stock_price_table: priceTables
            }]
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;