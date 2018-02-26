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
      <input value={this.props.value}  onChange = {  this.handleChange }/>
    );
  }
}

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
