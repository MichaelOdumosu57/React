import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

// when not working with adding a lifecycle method to a  class comment out componentDidMount componentWillUnmount
//tick functions

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

//to see how components are truly isolated uncomment the app component and in the ReactDOM.render method and take o
// out the this.props.ok.string js embed

const ok_object = {
  string:"apx"
}
ReactDOM.render(
  // <Clock ok = {ok_object} />,
  <App />,
  document.getElementById('root')
);
