import React from 'react';
import ReactDOM from 'react-dom';


function SearchBar(props){
  return (
    <div>
    <input type="text" value={props.greeter}  />
    <input type="checkbox" value={props.message}  />
    </div>
  );
}

// change to an es6 class

function PriceBoard() {
  return (

  <div>
    <div color = "green">

    </div>
    <SearchBar
      greeter="Search..."
      message="Only Show Products In Stock" />
  </div>
  );
}


ReactDOM.render(
  <PriceBoard />,
  document.getElementById('root')
);
