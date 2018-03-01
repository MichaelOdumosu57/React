import React from 'react';
import ReactDOM from 'react-dom';







class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};


  }
  render(){
    return (
      <div>
        <input type="text" value={this.props.greeter}  />
        <div>
          <input type="checkbox"   />
          <h6>{this.props.message}</h6>
        </div>
      </div>
    );
  }
}

// change to an es6 class

class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = {color: ''};


  }


    label_red(){
       () => this.setState({color:"red"})
       return this.state.color;
     }

     label_cyan(){
        () => this.setState({color:"cyan"})
        return this.state.color;
      }

      label(sides){
        () => this.setState({color})
      }


  render(){
    const info =  [this.props.name,this.props.price]
    const item_description = info.map((category,index) =>
      <h6 key = {index}>
        {category}
      </h6>
    );
    let edges = null;
    if(this.props.price == undefined){
      return (<div color = {this.state.color}>{item_description}</div>);
    }
    else{
      return ( <div color = {this.state.color}>{item_description}</div>);
    }







  }
}

function PriceBoard() {
  return (

  <div>
    <div color = "green">
    <SearchBar
      greeter="Search..."
      message="Only Show Products In Stock" />
      <h6>Name</h6>
      <h6>Price</h6>
      <Item name = "Sporting Goods" />
      <Item name = "Football " price = "$49.99"/>
      <Item name = "Football " price = "$49.99"/>
      <Item name = "Football " price = "$49.99"/>
      <Item name = "Electronics" />
      <Item name = "iPod Touch" price = "$99.99"/>
      <Item name = "iPod Touch" price = "$99.99"/>
      <Item name = "iPod Touch" price = "$99.99"/>

    </div>
  </div>
  );
}


ReactDOM.render(
  <PriceBoard />,
  document.getElementById('root')
);
