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
                /> 
                )
            }) }

         </div>
        );
    }
}

export default Cart;