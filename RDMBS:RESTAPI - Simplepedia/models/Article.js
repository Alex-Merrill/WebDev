const { Model } = require('objection');

class Article extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'Article';
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        extract: { type: 'text', default: '' },
        edited: { type: 'string', format: 'date-time'},
      },
    };
  }
}

module.exports = Article;
