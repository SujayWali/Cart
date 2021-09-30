import React from "react";
import { render } from "react-dom";

class CartItem extends React.Component {
 

    // testing() {
    //     const promise = new promise ((resolve, reject) => {
    //       setTimeout(() => {
    //          resolve('done');

    //       }, 5000); 
    //     })

    //     promise.then(() => {
    //         //setState acts like a synchronous call 
    //         this.setState({qty: 100});

    //         console.log('state', this.state);
    //     });

    // }

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
        },() => {
            console.log("this.state",this.state);
        });

        // console.log("this.state" ,this.state); ----because our setState call is asynchronous 
    }

    decreaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("this.state" , this.state);
        //-----------------setState form 1------------------
        // this.setState ({
        //     qty: this.state.qty + 1
        // });
        //-----------------setState form 2------------------
        const { qty } = this.state // using Object distructuring
        if (qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        },() => {
                console.log("this.state",this.state)
        });
    }

   
    
render(){

    console.log('this.props', this.props);
    const {price, title, qty, img} = this.props.product; // using Object distructuring
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