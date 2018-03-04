import React from 'react';
import ReactDOM from 'react-dom';



<<<<<<< HEAD
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
=======

const messages = ['A','B','C']
const variable = false;
// Calls the children callback numTimes to produce a repeated component
function Email(props) {
  const other = props
  return(
    <div>
      {props.messages.length > 0 &&
        <MessageList messages={props.messages} {...other} />
      }
    </div>
  )
}

function MessageList(props) {

  return[
    <h6 key ='a'>{props.messages}</h6>,
    <h2 key = 'b'>{String(props.vars)}</h2>,

    ];

}




>>>>>>> projects



ReactDOM.render(
<<<<<<< HEAD
  <GoodbyeDialog />,
=======
  <Email messages = {messages} vars = {variable}/>,
>>>>>>> projects
  document.getElementById('root')
);
