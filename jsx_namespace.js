import React from 'react';
import ReactDOM from 'react-dom';





const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

ReactDOM.render(
  <BlueDatePicker />,
  document.getElementById('root')
);
