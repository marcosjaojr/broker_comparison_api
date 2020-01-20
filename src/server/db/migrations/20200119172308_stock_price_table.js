
exports.up = function (knex) {
    return knex.schema.createTable('stock_price_table', (table) => {
        table.increments();
        table.integer('broker_stock_price_table_id').references('id').inTable('broker_stock_price_table');
        table.integer('bottom_limit_quantity').notNullable();
        table.integer('swing_trade_price_in_cents').nullable();
        table.integer('day_trade_price_in_cents').nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('stock_price_table');
};
