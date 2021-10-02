import React from "react";
import CartItem from "./CartItem";
import { render } from "react-dom";

const Cart = (props) => {

    const { products } = props;
    // const arr = [1, 2, 3, 4, 5];
    return (
        <div className="cart">
            {/* { arr.map((item) => {
                return item + 5;
            }) } */}
            {/* <CartItem qty={1} price={99} title={"watch"} img={''} />  */}
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}

        </div>
    );
}

export default Cart;