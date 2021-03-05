import PropTypes from 'prop-types';

import styles from './Article.module.css';

/*
  Article.js

  The Article displays the contents of an article.

*/

export default function Article({ article }) {

  // returns structured DOM
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.text}>{article.extract}</p>
      <p className={styles.timestamp}>{new Date(article.edited).toLocaleString('en-US')}</p>
    </div>
  );

}

Article.propTypes = {
  article: PropTypes.object.isRequired,
};
