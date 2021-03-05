import nc from 'next-connect';

import {
  deleteArticle,
  updateArticle,
} from '../../../lib/backend-utils';
import { onError, cors } from '../../../lib/middleware';

const handler = nc({ onError })
.use(cors)
  .put(async (req, res) => {
    const { id } = req.query;
    const newArticle = req.body;
    const count = await updateArticle(newArticle);

    if (count === 0) {
      res.status(404).end(`Article with id ${id} not found`);
    } else {
      res.status(200).end();
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query;
    const count = await deleteArticle(id);
    if (count === 0) {
      res.status(404).end(`Article with id ${id} not found`);
    } else {
      res.status(200).end();
    }
  });

export default handler;
