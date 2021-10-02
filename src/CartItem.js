import React from "react";
import { render } from "react-dom";

class CartItem extends React.Component {


render(){

    console.log('this.props', this.props);
    const {price, title, qty, img} = this.props.product; // using Object distructuring
    const {
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = this.props; // using Object distructuring
    return(
        <div className="cart-item">
            
            <div className="left-block">
                 <img style={styles.image}/>
            </div>
            <div className="right-block">
                
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color: '#777' }}>Qty: {qty}</div>
                <div className="cart-items-actions">
                    {/* Buttons */}
                    <img alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                    onClick = {() => onIncreaseQuantity(product)}
                    />
                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                    onClick = {() => onDecreaseQuantity(product)}
                    />
                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    onClick = {() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>

        </div>
    );
}

}

const styles = {
    image:{
        height: 110,
        width:110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;