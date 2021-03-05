import PropTypes from 'prop-types';

/*
  ButtonBar.js

  The ButtonBar component allows users to switch between adding
  an article and viewing the articles.
*/

export default function ButtonBar({ handleClick, allowEdit }) {
  
  let contents;
  if(allowEdit) {
    contents = (
      <div>
        <button type="button" onClick={() => { handleClick('add') }}>Add</button>
        <button type="button" onClick={() => { handleClick('edit') }}>Edit</button>
        <button type="button" onClick={() => { handleClick('delete') }}>Delete</button>
      </div>
    );
  } else {
    contents = (
      <div>
        <button type="button" onClick={() => { handleClick('add') }}>Add</button>
      </div>
    );
  }

  // returns structured DOM
  return (contents);

}

ButtonBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool
};

