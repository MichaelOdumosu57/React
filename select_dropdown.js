import React from 'react';
import ReactDOM from 'react-dom';

//to change to a single selection, have only on option string in this.state
//and in the render() change the multiple selection in react to false

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ['coconut','mango']};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: this.state.value  + event.target.value});
  }
// if you need the previous state, just remember to include it there is something About
//prevState but this seems simpler this all work like regular js string
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select multiple ={true} value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
