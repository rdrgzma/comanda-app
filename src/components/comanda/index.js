import React, { Component } from 'react';
import Pedido from '../pedido'
import Produto from '../produto'

const URL='https://comanda-server.herokuapp.com'

class Comanda extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itens: [],
      pedido: []
      
    }
    this.addPedido = this.addPedido.bind(this)
  }

    addPedido(item) {
      var found = false;
      var updatePedido = this.state.pedido.map((pedidoItem) => {
        if (pedidoItem.nome === item.nome) {
          found = true;
          pedidoItem.quantidade++;
          return pedidoItem;
        } else {
          return pedidoItem;
        }
      });
      
      if (!found) { updatePedido.push({id: item.id, nome: item.nome, preco: item.preco, quantidade: 1}) }
      
       this.setState({
        pedido: updatePedido
      })
      localStorage.setItem('pedido',JSON.stringify(this.state.pedido))
    }
  componentDidMount(){
    fetch(URL+'/estabelecimentos/1', {
      method: 'get'
    }).then(response => {
      return response.json()  
    }).then(data =>{
      console.log(data.produtos)
      this.setState({
        itens: data.produtos
      })
      return data.produtos

    })

  }

  render() {
    if(!this.state.itens) return <p>Carregando ...</p>
    return (
      <div>
      <section>
        <h3>Produtos</h3>
        <Pedido pedido={this.state.pedido} />
      </section>
        <div className="Produtos">  
          {this.state.itens.map((item) => {
            return <Produto key = {item.id} produto={item} addPedido={this.addPedido} />
          })}
        </div>
    </div>
    );
  }
}

export default Comanda;
