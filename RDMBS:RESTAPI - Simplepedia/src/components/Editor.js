import { useState } from 'react';

import PropTypes from 'prop-types';

/*
  Editor.js

  This component allows users to create new articles. 
*/

export default function Editor({ complete, article }) {
  const [title, setTitle] = article ? useState(article.title) : useState("");
  const [extract, setExtract] = article ? useState(article.extract) : useState("");

  const build = () => {
    const newArt = {
      ...article,
      title,
      extract,
      edited: (new Date()).toISOString()
    };
    complete(newArt);
  };

  return (
    <div>
      <input id="title" type="text" aria-label="title" placeholder="Title" onChange={(event) => {setTitle(event.target.value)}} value={title} /><br />
      <textarea id="body" aria-label="body" placeholder="Add article contents here" rows="10" cols="65" onChange={(event) => {setExtract(event.target.value)}} value={extract} /><br />
      <button type="submit" disabled={title ? false : true} onClick={() => { build() }}>Save</button>
      <button type="reset" onClick={() => { complete() }}>Cancel</button>
    </div>
  );

}

Editor.propTypes = {
  complete: PropTypes.func.isRequired,
  article: PropTypes.object
};