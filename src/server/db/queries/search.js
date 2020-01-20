const knex = require('../connection');

function getBrokersStockPrice(swing_trade_quantity) {
    const today = new Date().toJSON().slice(0,10);

    const subquery = knex.raw(`
        SELECT
            row_number() over (PARTITION BY broker.id ORDER BY bottom_limit_quantity DESC) as row,
            broker.id as broker_id,
            broker.name as broker_name,
            broker.site_url as broker_site_url,
            broker.logo_url as broker_logo_url,
            broker_stock_price_table.created_at as created_at,
            broker_stock_price_table.valid_from as valid_from,
            stock_price_table.swing_trade_price_in_cents as swing_trade_price_in_cents
        FROM public.broker
        INNER JOIN public.broker_stock_price_table
            ON broker_stock_price_table.broker_id = broker.id
        INNER JOIN public.stock_price_table
            ON broker_stock_price_table.id = stock_price_table.broker_stock_price_table_id
        WHERE
            valid_from <= '${today}'
            AND valid_thru is null
            AND bottom_limit_quantity <= ${parseInt(swing_trade_quantity)}
    `).wrap('(', ') stock_prices');

    return knex.select(
        'broker_id',
        'broker_name',
        'broker_site_url',
        'broker_logo_url',
        'created_at',
        'valid_from',
        'swing_trade_price_in_cents'
    )
    .from(subquery)
    .where({ row: 1 })
    .orderBy('swing_trade_price_in_cents', 'desc');
}

module.exports = {
    getBrokersStockPrice
}