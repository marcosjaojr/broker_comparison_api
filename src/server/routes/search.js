const Router = require('koa-router');
const queries = require('../db/queries/search');

const router = Router();
const BASE_URL = '/api/v1/search';

router.get(BASE_URL, async (ctx) => {
    try {
        query_string = ctx.request.query;
        const brokersStockPrices = await queries.getBrokersStockPrice(
            query_string.swing_trade_quantity
        );

        ctx.body = {
            status: 'success',
            data: brokersStockPrices
        };
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;