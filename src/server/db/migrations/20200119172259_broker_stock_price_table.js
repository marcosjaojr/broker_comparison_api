
exports.up = function (knex) {
    return knex.schema.createTable('broker_stock_price_table', (table) => {
        table.increments();
        table.integer('broker_id').references('id').inTable('broker');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('valid_from').notNullable();
        table.timestamp('valid_thru').nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('broker_stock_price_table');
};
