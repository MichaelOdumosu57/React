import React from 'react';
import ReactDOM from 'react-dom';



const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


function JustContainer(props){
  return(
    <div color = "yellow">
      {props.children}
    </div>
  )
}



class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {search_item: '',checked: true};

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
  }

  handleTextChange(e){
    this.props.onTextChange(e.target.value)

  }

  handleBoxChange(e){
    this.props.onHit(e.target.checked)
  }

  render(){




    return (
      <JustContainer>
      <div>
        <input type="text" placeholder={this.props.greeter}  onChange = {this.handleTextChange} value ={this.props.text_query} />
        <p>
          <input type="checkbox"  onChange = {this.handleBoxChange}  />
          {' '}
          {this.props.message}
        </p>

      </div>
      {this.props.children}
      </JustContainer>

    );
  }
}

// change to an es6 class

class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);

  }




  render(){
    const info =  [this.props.name,this.props.price]
    const item_description = info.map((category,index) =>
      <h6 key = {index}>
        {category}
      </h6>
    );


      return ( <div color = {this.props.color} onChange={this.handleChange}>{item_description}</div>);




  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class PriceBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text_query: '',
      checked: true,
      first: true
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange =  this.handleCheckChange.bind(this);

  }

  handleTextChange(name){
    this.setState({
      text_query: name,
      first:false
    })
  }

  handleCheckChange(hit){
    this.setState({
      checked: hit,
      first:false
    })
  }





  render(){

    const rows = [];
    let lastCategory = null;


     PRODUCTS.forEach((product) => {
       if (product.name.indexOf(this.state.text_query) === -1) {
         return;
       }
       if (this.state.checked && !product.stocked &&  !this.state.first) {
         return;
       }

       if (product.category !== lastCategory) {
         rows.push(
           <ProductCategoryRow
             category={product.category}
             key={product.category} />
         );
       }
       rows.push(
         <ProductRow
           product={product}
           key={product.name}
         />
       );
       lastCategory = product.category;
    });


    return (




      <SearchBar
        textChange = {this.state.text_query}
        hit = {this.state.checked}
        onTextChange = {this.handleTextChange}
        onHit = {this.handleCheckChange }
        greeter="Search..."
        message="Only Show Products In Stock" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </SearchBar>


    );
  }s
}


ReactDOM.render(
  <PriceBoard />,
  document.getElementById('root')
);
