import React, { Component } from 'react';

class Product extends Component{
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
      }

      addToCart() {
   
        if (window.confirm('Você deseja adicionar este produto?')){
        this.props.addToCart(this.props.details);
        } else {
        }
      }
    
      render(){
        let item = this.props.details;
        return (
          <div className="Product" onClick={this.addToCart}>
            <p>{item.nome}</p>
            <p>{item.preco}</p>
          </div>
        );
      }

}
export default Product;