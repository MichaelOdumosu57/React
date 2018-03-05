import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';




class MyComponent extends React.Component {
render() {
  // This must be exactly one element or it will warn.
  const children = this.props.children;
  return (
    <div>
      {children}
    </div>
  );
}
}

MyComponent.propTypes = {
children: PropTypes.string.isRequired
};


const props ={children:"di i pass"}

ReactDOM.render(


  <MyComponent {...props} children = "string"/>,



  document.getElementById('root')
);
