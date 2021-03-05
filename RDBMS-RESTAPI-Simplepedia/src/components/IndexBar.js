import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Sections from '../components/Sections';
import Titles from '../components/Titles';

/*
  IndexBar.js

  This component provides the section and title display that allows the user to 
  browse the available articles and select one for display. 
*/

export default function IndexBar({ collection, select, currentArticle }) {
  // create state to keep track of current selected section
  const [section, setSection] = useState();

  // creates list of all titles to get list of sections
  const allTitles = collection.map(e => e.title);
  const sections = [];
  allTitles.forEach(e => {
    if(!sections.includes(e.charAt(0))) {
      sections.push(e.charAt(0).toUpperCase());
    }
  });
  sections.sort();

  // creates list of articles to display
  const articles = collection.filter(e => {
    if(e.title.charAt(0) === section) {
      return true;
    }
    return false;
  }).sort((a, b) => ((a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1));

  // creates Message component to display message if section hasn't been selected.
  const Message = function Message() {
    return (<main><p>Please select a section to view articles.</p></main>);
  };

  // watches for currentArticle change to update section displayed
  useEffect(() => {
    if(currentArticle) {
      setSection(currentArticle.title.charAt(0).toUpperCase());
    }
  }, [currentArticle]);

  
  // defines TitleRegion component based on section state
  const TitleRegion = (section && sections.includes(section)) ? Titles : Message;

  // returns structured DOM
  return (
    <div>
      <Sections sections={sections} setSection={setSection} select={select} />
      <TitleRegion articles={articles} select={select} section={section}/>
    </div>
  );
  
}

IndexBar.propTypes = {
  collection: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  currentArticle: PropTypes.object
};
