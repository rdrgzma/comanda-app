import React, { Component } from 'react';

class Produto extends Component{
    constructor(props) {
        super(props)
        this.addPedido = this.addPedido.bind(this)
      }

      addPedido() {
   
        if (window.confirm('Você deseja adicionar este produto?')){
        this.props.addPedido(this.props.produto);
        } else {
        }
      }
    
      render(){
        let item = this.props.produto;
        return (
          <div className="Produto" onClick={this.addPedido}>
            <p>{item.nome}</p>
            <p>{item.preco}</p>
          </div>
        );
      }

}
export default Produto;