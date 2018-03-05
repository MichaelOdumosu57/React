import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';




function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}




ReactDOM.render(


  <Parent/>,



  document.getElementById('root')
);
