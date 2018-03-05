import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';






function CustomTextInput(props) {
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}





ReactDOM.render(


  <CustomTextInput/>,



  document.getElementById('root')
);
