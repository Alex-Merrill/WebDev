

import sampleArticles from "../../data/test-data";
import {
  getArticles,
  deleteArticle,
  updateArticle,
  addArticle,
  knex
} from "./backend-utils";



describe("Tests of the database utility functions", () => {

  beforeEach(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });


  describe('get articles', ()=>{
    test("getArticles gets all articles", async () => {

      const articles = await getArticles();
      
      sampleArticles.sort((a, b) => a.title.localeCompare(b.title));
      articles.sort((a, b) => a.title.localeCompare(b.title))
      expect(articles).toEqual(sampleArticles);
    });
  });
  
  describe('add articles', ()=>{

    test("addArticle returns an article with new id", async () => {
      const sample = {
        title: "new article",
        extract: "new body",
        edited: "2020-08-10T18:00:40Z",
      };

      const article = await addArticle(sample);
      expect(article.title).toBe(sample.title);
      expect(article.extract).toBe(sample.extract);
      expect(article.edited).toBe(sample.edited);
      expect(article.id).toBeGreaterThanOrEqual(0);
    });

    test("addArticle should reject article with no title", async () => {
      expect.assertions(1);
      const sample = {
        extract: "new body",
        edited: "2020-08-10T18:00:40Z",
      };

      try {
        await addArticle(sample);
      } catch (e) {
        expect(e.toString()).toContain("Error");
      }
    });

    test("addArticle should reject article with duplicate title", async () => {
      expect.assertions(1);
      const sample = {
        title: sampleArticles[0].title,
        extract: "new body",
        edited: "2020-08-10T18:00:40Z",
      };

      try {
        await addArticle(sample);
      } catch (e) {
        expect(e.toString()).toContain("Error");
      }
    });

    test("addArticle should reject article with no date", async () => {
      expect.assertions(1);
      const sample = {
        title: "New title",
        extract: "new body",
      };

      try {
        await addArticle(sample);
      } catch (e) {
        expect(e.toString()).toContain("Error");
      }
    });

    test("addArticle should create a default extract", async()=>{
      const sample = {
        title: "New title",
        edited: "2020-08-10T18:00:40Z",
      };
      const article = await addArticle(sample);
      expect(article.title).toBe(sample.title);
      expect(article.extract).toBe('');
      expect(article.edited).toBe(sample.edited);



    });

    test("addArticle should reject article with bad date", async () => {
      expect.assertions(1);
      const sample = {
        title: "New title",
        extract: "new body",
        edited: "4"
      };

      try {
        await addArticle(sample);
      } catch (e) {
        expect(e.toString()).toContain("Error");
      }
    });

  });

  describe('delete articles', ()=>{
    test("deleteArticle deletes articles", async () => {
      const sample = sampleArticles[0];

      const count = await deleteArticle(sample.id);
      expect(count).toBe(1);
      const rows = await knex('Article').where({title:sample.title}).select();
      expect(rows).toHaveLength(0);
    });

    test("deleteArticle on missing article returns 0", async () => {
      const count = await deleteArticle(-1);
      expect(count).toBe(0);
    });
  });

  describe('update articles', ()=>{
    test("updateArticle updates the article", async () => {
    const sample = { ...sampleArticles[0], title: "The Master" };
    const count = await updateArticle(sample);
    expect(count).toBe(1);
    const rows = await knex('Article').where({id:sample.id}).select();
      
    const article = rows[0];
    expect(article.title).toBe(sample.title);
    });

    test("updateArticle returns 0 if the id doesn't exist", async () => {
      const sample = { id: -1, title: "Bad article" };
      const count = await updateArticle(sample);
      expect(count).toBe(0);
    });

    test("updateArticle should reject article with duplicate title", async () => {
      expect.assertions(1);
      const sample = { ...sampleArticles[0], title: sampleArticles[1].title };

      try {
        await updateArticle(sample);
      } catch (e) {
        expect(e.toString()).toContain("Error");
      }
    });
  });

});

  
