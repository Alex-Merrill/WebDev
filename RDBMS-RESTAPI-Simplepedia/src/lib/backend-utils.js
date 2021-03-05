/*

  backend-utils.js

  This is a collection of utility functions to be called on the server backend. These functions
  interact directly with the database.

  available functions:

  getArticles - reads all of the articles out of the DB and returns them sorted by title
  deleteArticle(id) - delete the article associated with the given id
  updateArticle(article) - update the data store with changes in `article`
  addArticle(article) - add the new `article` to the data store 
*/

import knexConfig from '../../knexfile';
import knexInitializer from 'knex';
export const knex = knexInitializer(
  knexConfig[process.env.TESTING || process.env.NODE_ENV || 'development']
);

import { Model } from 'objection';
import Article from '../../models/Article';
Model.knex(knex);


/**
 * Find all articles and sort them by title
 *
 * returns list of articles sorted by title
 */
export async function getArticles() {
  const articles = await Article.query();
  return articles;
}


/**
 * Remove the article associated with the provided id from the data storage
 *
 * @param {number} id
 * returns the number of articles deleted
 */
export async function deleteArticle(id) {
  const numDeleted = await Article.query()
    .deleteById(id);
  return numDeleted;
}

/**
 * Update the data store with the provided article object
 *
 * @param {object} article
 * returns the number of articles updated
 */
export async function updateArticle(article) {
  const numUpdated = await Article.query()
    .patch(article)
    .where('id', article.id);
    return numUpdated;
}

/**
 * Add a new article to the data store
 *
 * @param {number} article
 * returns the article with a new id attached
 */
export async function addArticle(article) {
  const newArticle = await Article.query()
    .insertAndFetch(article);
  return newArticle;
}
