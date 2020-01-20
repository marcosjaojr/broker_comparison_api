
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('broker').del()
    .then(function () {
      // Inserts seed entries
      return knex('broker').insert([
        {
          id: 1,
          name: 'Ágora',
          tax_id: '74014747000135',
          site_url: 'https://www.agorainvestimentos.com.br/',
          logo_url: null
        },
        {
          id: 2,
          name: 'XP',
          tax_id: '02332886000104',
          site_url: 'https://www.xpi.com.br/',
          logo_url: null
        },
        {
          id: 3,
          name: 'BTG Pactual Digital',
          tax_id: '30306294000145',
          site_url: 'https://www.btgpactualdigital.com/',
          logo_url: null
        },
        {
          id: 4,
          name: 'Rico',
          tax_id: '13434335000160',
          site_url: 'https://www.rico.com.vc/',
          logo_url: null
        }
      ]);
    });
};
