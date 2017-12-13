import React, { Component } from 'react';

class Product extends Component{
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
      }

      addToCart() {
   
        if (window.confirm('Clique em um botão')){
        alert ("Você clicou no botão OK,\n"+
        "porque foi retornado o valor: ");
        this.props.addToCart(this.props.details);
        } else {
       
        alert ("Você clicou no botão CANCELAR,\n"+
        "porque foi retornado o valor: ");
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