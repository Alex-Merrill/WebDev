import path from "path";
import request from "supertest";
import {
  startApp,
  stopApp,
  nextBuild,
  nextServer,
} from "../test-utils/next-test-utils";

import {films} from '../lib/backend-utils';
const sampleFilm = films.values().next().value;


const appDir = path.join(__dirname, "../../");


jest.setTimeout(1000 * 10);


describe('Film Explorer API', () => {

  let server;
  beforeEach(async () => {
    
    await nextBuild(appDir);
    const app = nextServer({
      dir: appDir,
      dev: false,
      quiet: true,
    });
   
    server = await startApp(app);
  
    jest.resetModules(); // make sure that films is reset
  });

  /**
   * Shut down the server
   */
  afterEach(async () => {
    await stopApp(server)

  });

  test('GET /api/films should return all films (mostly Jest)', async() => {
    const response = await request(server)
      .get('/api/films');
    
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
          expect.stringContaining('json')
        );
    expect(response.body).toEqual(Array.from(films.values()));
  });

  test('GET /api/films should return all films (mostly SuperTest)',  (done) => {
     request(server)
      .get('/api/films')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(Array.from(films.values()), done);
  });

  test('PUT /api/films/:id should update the film (mostly SuperTest)', (done) => {
    const newfilm = { ...sampleFilm, rating: 4 };
    request(server)
      .put(`/api/films/${newfilm.id}`)
      .send(newfilm)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(newfilm, done);
  });

  test('GET /api/films/:id should return single film', (done) => {
    request(server)
      .get(`/api/films/${sampleFilm.id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(sampleFilm, done);
  });
});