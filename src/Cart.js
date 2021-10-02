import React from "react";
import CartItem from "./CartItem";
import { render } from "react-dom";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
         products:[
             {
                title : 'Watch',
                price : 99,
                qty : 1,
                img : '',
                id : 1
             },

             {
                title : 'Mobile Phone',
                price : 999,
                qty : 10,
                img : '',
                id : 2
             },

             {
                title : 'Laptop',
                price : 999,
                qty : 4,
                img : '' ,
                id : 3
             }
         ]
        }
        

        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

    handleIncreaseQuantity = (product) => {
        console.log("this.product", product);
        const { products } =  this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log("this.product", product);
        const { products } =  this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        })
    }

    hanleDeleteProduct = (id) => {
        const {products} = this.state;
        const items =  products.filter((item) => item.id !== id); //[{}]

        this.setState({
            products: items
        })
    }
    render(){
        const { products } = this.state; 
        // const arr = [1, 2, 3, 4, 5];
        return(
         <div className="cart">
            {/* { arr.map((item) => {
                return item + 5;
            }) } */}
            {/* <CartItem qty={1} price={99} title={"watch"} img={''} />  */}
            { products.map((product) => {
                return  (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
                onDeleteProduct = {this.hanleDeleteProduct}
                /> 
                )
            }) }

         </div>
        );
    }
}

export default Cart;