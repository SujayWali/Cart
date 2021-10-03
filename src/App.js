import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Watch',
          price: 99,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          id: 1
        },

        {
          title: 'Mobile Phone',
          price: 999,
          qty: 10,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
          id: 2
        },

        {
          title: 'Laptop',
          price: 999,
          qty: 4,
          img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80',
          id: 3
        }
      ]
    }


    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    console.log("this.product", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log("this.product", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  hanleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //[{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    
    products.forEach((product) => {
      count += product.qty
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price;
    }
    return '';
    });
    return cartTotal;

  }

  render() {

    const {products} = this.state;

    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.hanleDeleteProduct}
        />
        <div style = {{fontSize:20,padding:5}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
