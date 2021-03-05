import nc from 'next-connect';
import { films } from '../../../lib/backend-utils';

const handler = nc()
  .get(async (req, res) => {
    const { id } = req.query;
    res.status(200).json(films.get(+id));
  })
  .put(async (req, res) => {
    const { id } = req.query;
    const updatedFilm = req.body;
    const mergedFilm = {...films.get(+id), ...updatedFilm};
    films.set(mergedFilm.id, mergedFilm);
    res.status(200).json(mergedFilm);
  });

export default handler;

