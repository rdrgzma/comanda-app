import React, { Component } from 'react';

class Product extends Component{
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
      }

      addToCart() {
        this.props.addToCart(this.props.details);
      }
      render(){
        let item = this.props.details;
        return (
          <div className="Product" onClick={this.addToCart}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      }

}
export default Product;