import React, { Component } from 'react';

class Cart extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
            open: false
        }
        this.openCart = this.openCart.bind(this)
      }

      openCart() {
        this.setState({
          open: !this.state.open
        })
      }

      render(){
        return (
            <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
              <p className="Title">Cart</p>
              <div>
              {this.props.cart.length > 0 ? this.props.cart.map((item) => {
                return <p key={item.id}>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
              </div>
            </div>
          );
      }

}

export default Cart