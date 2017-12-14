import React, { Component } from 'react';
import three from './menublack.png';

class Pedido extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
            open: false
        }
        this.openPedido = this.openPedido.bind(this)
      }

      openPedido() {
        this.setState({
          open: !this.state.open
        })
      }

      render(){
        return (
            <div className={"Pedido " + (this.state.open ? "Pedido-Open" : " ")} onClick={this.openPedido} >
              <p className="Title"><img className="IconPedidos"src={three} alt='Pedidos'/></p>
              <div >
              {this.props.pedido.length > 0 ? this.props.pedido.map((item) => {
                return <p key={item.id}>{item.nome}{item.quantidade > 1 ? <span> {' : '+item.quantidade}</span> : ' : 1'}</p> }) : <p>Não há pedidos</p>}
              </div>
            </div>
          );
      }

}

export default Pedido