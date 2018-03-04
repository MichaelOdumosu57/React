import React from 'react';
import ReactDOM from 'react-dom';




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







ReactDOM.render(
  <Email messages = {messages} vars = {variable}/>,
  document.getElementById('root')
);
