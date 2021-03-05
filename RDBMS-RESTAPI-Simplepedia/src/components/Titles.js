import PropTypes from 'prop-types';

/*
  Titles.js

  This component provides the list of titles below the sections in the IndexBar.
*/

export default function Titles({ articles, select }) {
  // convert the list of titles to an html list
  const hList = articles.map(e => (<li key={e.title} data-testid="title" onClick={() => select(e)}>{e.title}</li>));
  
  // returns structured DOM
  return (
    <div>
      <ul>
        {hList}
      </ul>
    </div>
  );

}

Titles.propTypes = {
  articles: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
};