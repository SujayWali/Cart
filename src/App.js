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
          img: '',
          id: 1
        },

        {
          title: 'Mobile Phone',
          price: 999,
          qty: 10,
          img: '',
          id: 2
        },

        {
          title: 'Laptop',
          price: 999,
          qty: 4,
          img: '',
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
      </div>
    );
  }
}

export default App;
