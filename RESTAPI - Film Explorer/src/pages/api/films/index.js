import nc from 'next-connect';
import { films } from '../../../lib/backend-utils';

const handler = nc().get((req, res) => {
  res.status(200).json(Array.from(films.values()));
});

export default handler;

