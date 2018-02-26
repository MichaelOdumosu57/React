import React from 'react';
import ReactDOM from 'react-dom';


class Wait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value:    event.target.value});
  }

  render() {
    return (
      <textarea value={this.props.value}  onChange = {  this.handleChange }/>
    );
  }
}
// here when react sees a different element being called to render, it completly replaces that element,
// you might have to save it with child nodes
ReactDOM.render(
  <input />,
  document.getElementById('root')
  );

setTimeout(function() {
  ReactDOM.render(

    <Wait value = "well"/>,
    document.getElementById('root')
  )
}, 1000);
