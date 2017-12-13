import React, { Component } from 'react';
import Cart from './Cart'
import Product from './Product'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      cart: []
      
    }
    this.getItems = this.getItems.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }
    getItems(){
      fetch('http://localhost:8080/estabelecimentos/1', {
        method: 'get'
      }).then(response => {
        return response.json()  
      }).then(data =>{
        console.log(data.produtos)
        return data.produtos

      })
      
    }

    addToCart(item) {
      var found = false;
      var updatedCart = this.state.cart.map((cartItem) => {
        if (cartItem.nome === item.nome) {
          found = true;
          cartItem.quantidade++;
          return cartItem;
        } else {
          return cartItem;
        }
      });
      
      if (!found) { updatedCart.push({id: item.id, nome: item.nome, preco: item.preco, quantidade: 1}) }
      
      this.setState({
        cart: updatedCart
      }, console.log(this.state.cart));


    }
  componentDidMount(){
    fetch('http://localhost:8080/estabelecimentos/1', {
      method: 'get'
    }).then(response => {
      return response.json()  
    }).then(data =>{
      console.log(data.produtos)
      this.setState({
        items: data.produtos
      })
      return data.produtos

    })

  }

  render() {
    if(!this.state.items) return <p>Carregando ...</p>
    return (
      <div>
      <nav>
        <h3>Produtos</h3>
        <Cart cart={this.state.cart} />
      </nav>
        <div className="Products">  
          {this.state.items.map((item) => {
            return <Product key = {item.id} details={item} addToCart={this.addToCart} />
          })}
        </div>
    </div>
    );
  }
}

export default App;
