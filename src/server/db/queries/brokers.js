const knex = require('../connection');

function getAllBrokers() {
    return knex('broker')
        .select('*');
}

function getSingleBroker(id) {
    return knex('broker')
        .select('*')
        .where({ id: parseInt(id) });
}

function getBrokerCurrentPriceTable(brokerId) {
    const today = new Date().toJSON().slice(0,10);
    return knex('broker_stock_price_table')
        .select('*')
        .where({ broker_id: parseInt(brokerId), valid_thru: null })
        .whereRaw(`broker_stock_price_table.valid_from <= '${today}'`)
        .orderBy('valid_from', 'desc')
        .limit(1);
}

function getPriceTables(brokerPriceTableId) {
    return knex('stock_price_table')
        .select('*')
        .where({ broker_stock_price_table_id: parseInt(brokerPriceTableId) })
        .orderBy('bottom_limit_quantity', 'asc');
}

module.exports = {
    getAllBrokers,
    getSingleBroker,
    getBrokerCurrentPriceTable,
    getPriceTables
};