import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
       
      ],

      loading: true
    }
    this.db = firebase.firestore();
  }


    componentDidMount () {
      // firebase
      //   .firestore()
      //   .collection('products')
      //   .get()
      //   .then((snapshot) => {
      //     console.log(snapshot);

      //     snapshot.docs.map((doc) => {
      //       console.log(doc.data());
      //     });

      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();

      //       data['id'] = doc.id;

      //       return data;
      //     })
      //     this.setState({
      //       products,
      //       loading: false
      //     })
      //   })

  this.db
    .collection('products')
    // .where("price","<",999)
    .orderBy("price")
    .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        })
        this.setState({
          products,
          loading: false
        })
      })
    }
    

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  

  handleIncreaseQuantity = (product) => {
  
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then (() => {
          console.log('Updated Succesfully');
      })
      .catch((error) => {
          console.log("Error: ",error);
      })
  }

  handleDecreaseQuantity = (product) => {
    console.log("this.product", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then (() => {
          console.log('Updated Succesfully');
      })
      .catch((error) => {
          console.log("Error: ",error);
      })
  }

  hanleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id); //[{}]

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then (() => {
        console.log('Deleted Succesfully');
    })
    .catch((error) => {
        console.log("Error: ",error);
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

  addProduct = () =>{
    this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'washing machine'
    })
    .then((docRef) => {
      console.log("product has been added",docRef);
    })
    .catch((error) => {
      console.log("error: ",error);
    })

  }



  render() {

    const {products, loading} = this.state;

    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style={{fonetSize:20,padding:20}}>Add a product</button> */}
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.hanleDeleteProduct}
        />
        {loading && <h1>Loading Products....</h1>}
        <div style = {{fontSize:20,padding:5}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
