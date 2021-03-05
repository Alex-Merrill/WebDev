import nc from 'next-connect';
import { getArticles, addArticle } from '../../../lib/backend-utils';
import { onError, cors } from '../../../lib/middleware';

const handler = nc({ onError })
  .use(cors)
  .get(async (req, res) => {
    const articles = await getArticles();
    res.status(200).json(articles);
  })
  .post(async (req, res) => {
    const newArticle = req.body;
    const article = await addArticle(newArticle);
    res.status(200).json(article);
  });

export default handler;
