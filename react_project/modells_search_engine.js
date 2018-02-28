import React from 'react';
import ReactDOM from 'react-dom';



function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}


function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function GoodbyeDialog() {
  return (
    <Dialog
      title="Goodbye"
      message="hope to see  you soon!" />
  );
}

// this is composition becasue here the Goodbye dialog is like a chraracterstics, the Dialog compoent is like a template
// but the charactersitcs uses the template to render the object and not the other way



ReactDOM.render(
  <GoodbyeDialog />,
  document.getElementById('root')
);
