import PropTypes from 'prop-types';

import styles from './Section.module.css';

/*
  Sections.js

  This component provides the list of sections at the top of the IndexBar. 
*/

export default function Sections({ sections, setSection, select }) {
  // convert the list of sections to an html list
  const hList = sections.map(e => 
    (<li data-testid="section" key={e} onClick={() => {
      setSection(e)
      select()
    }}>
      {e}
    </li>)
  );

  // returns structured DOM
  return (
    <div className={styles.container}>
      <ul>
        {hList}
      </ul>
    </div>
  );

}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  setSection: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
};