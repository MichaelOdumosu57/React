import React from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick () {
    try {
      // Do something that could throw
      hg
    } catch (error) {
      this.setState({ error:true });
    }
  }

  render() {
    if (this.state.error) {
      return (<h1>Caught an error.</h1>)
    }
    return ( <div onClick={this.handleClick}>Click Me</div>)
  }
}



ReactDOM.render(
  <MyComponent/>,
  document.getElementById('root')
);