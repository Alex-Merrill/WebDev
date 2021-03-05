import fs from 'fs';
import path from 'path';

export const films = new Map();

function initialize() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const fullPath = path.join(dataDirectory, 'films.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents);
  data.forEach((film) => {
    films.set(film.id, film);
  });
}

initialize();