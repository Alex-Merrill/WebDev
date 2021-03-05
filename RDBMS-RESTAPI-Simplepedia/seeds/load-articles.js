const fs = require('fs');

exports.seed = function (knex, Promise) {
  const contents = fs.readFileSync('./data/seed.json');
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  return knex('Article')
    .del()
    .then(() => knex.batchInsert('Article', data, 100));
};