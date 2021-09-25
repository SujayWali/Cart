import React from "react";
import { render } from "react-dom";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title : 'Mobile Phone',
            price : 999,
            qty : 1,
            img : ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("this.state" , this.state);
        //-----------------setState form 1------------------
        // this.setState ({
        //     qty: this.state.qty + 1
        // });
        //-----------------setState form 2------------------
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("this.state" , this.state);
        //-----------------setState form 1------------------
        // this.setState ({
        //     qty: this.state.qty + 1
        // });
        //-----------------setState form 2------------------
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        });
    }
render(){
    const {price, title, qty, img} = this.state; // using Object distructuring
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
                    onClick = {this.increaseQuantity}
                    />
                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                    onClick = {this.decreaseQuantity}
                    />
                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
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