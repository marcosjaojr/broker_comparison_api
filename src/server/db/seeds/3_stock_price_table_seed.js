
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stock_price_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock_price_table').insert([
        {
          id: 1,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 1,
          swing_trade_price_in_cents: 1800,
          day_trade_price_in_cents: 1200
        },
        {
          id: 2,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 5,
          swing_trade_price_in_cents: 1350,
          day_trade_price_in_cents: 1000
        },
        {
          id: 3,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 10,
          swing_trade_price_in_cents: 1300,
          day_trade_price_in_cents: 800
        },
        {
          id: 4,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 20,
          swing_trade_price_in_cents: 1200,
          day_trade_price_in_cents: 750
        },
        {
          id: 5,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 30,
          swing_trade_price_in_cents: 1000,
          day_trade_price_in_cents: 700
        },
        {
          id: 6,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 40,
          swing_trade_price_in_cents: 950,
          day_trade_price_in_cents: 650
        },
        {
          id: 7,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 50,
          swing_trade_price_in_cents: 900,
          day_trade_price_in_cents: 600
        },
        {
          id: 8,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 75,
          swing_trade_price_in_cents: 850,
          day_trade_price_in_cents: 500
        },
        {
          id: 9,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 100,
          swing_trade_price_in_cents: 800,
          day_trade_price_in_cents: 400
        },
        {
          id: 10,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 255,
          swing_trade_price_in_cents: 400,
          day_trade_price_in_cents: 300
        },
        {
          id: 11,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 500,
          swing_trade_price_in_cents: 300,
          day_trade_price_in_cents: 250
        },
        {
          id: 12,
          broker_stock_price_table_id: 1,
          bottom_limit_quantity: 1000,
          swing_trade_price_in_cents: 200,
          day_trade_price_in_cents: 150
        },
        {
          id: 13,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 1,
          swing_trade_price_in_cents: 1000,
          day_trade_price_in_cents: 750
        },
        {
          id: 14,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 10,
          swing_trade_price_in_cents: 770,
          day_trade_price_in_cents: 770
        },
        {
          id: 15,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 30,
          swing_trade_price_in_cents: 740,
          day_trade_price_in_cents: 740
        },
        {
          id: 16,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 50,
          swing_trade_price_in_cents: 715,
          day_trade_price_in_cents: 715
        },
        {
          id: 17,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 100,
          swing_trade_price_in_cents: 505,
          day_trade_price_in_cents: 505
        },
        {
          id: 18,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 166,
          swing_trade_price_in_cents: 385,
          day_trade_price_in_cents: 385
        },
        {
          id: 19,
          broker_stock_price_table_id: 3,
          bottom_limit_quantity: 333,
          swing_trade_price_in_cents: 320,
          day_trade_price_in_cents: 320
        }
      ]);
    });
};