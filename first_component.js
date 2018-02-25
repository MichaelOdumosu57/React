import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

//if looking out rendering an element comment out the app component
// if looking at composing components coment out the Elements
// seems like you cannot have two objects try to jsx render theirselves at the same spot simply by passing them as arguments
const element = <Welcome name="Sara" />;
ReactDOM.render(
  // element,
  <App />,
  document.getElementById('root')
);
