
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('broker_stock_price_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('broker_stock_price_table').insert([
        {id: 1, broker_id: 1, valid_from: '2019-11-11'},
        {id: 2, broker_id: 2, valid_from: '2019-12-12'},
        {id: 3, broker_id: 4, valid_from: '2020-01-01'}
      ]);
    });
};
