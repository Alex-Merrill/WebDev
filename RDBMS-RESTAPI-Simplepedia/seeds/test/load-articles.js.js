const fs = require("fs");


exports.seed = async function(knex) {
  const contents = fs.readFileSync("./data/test-data.json");
  const data = JSON.parse(contents);
  // Deletes ALL existing entries
  await knex("Article").del();
  // load in the sample articles
  await knex.batchInsert("Article", data, 100);
};
