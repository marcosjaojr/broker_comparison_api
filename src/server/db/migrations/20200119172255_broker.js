
exports.up = function (knex) {
    return knex.schema.createTable('broker', (table) => {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('tax_id').notNullable();
        table.string('site_url').nullable();
        table.string('logo_url').nullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('broker');
};
