import React, { Component } from 'react';
import Cart from './Cart'
import Product from './Product'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: this.getItems(),
      cart: []
      
    }
    this.getItems = this.getItems.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }
    getItems(){
      return [{id: 1, name: "Cool Banana", price: 2.49},
              {id: 2, name: "Epic Apple", price: 3.29},
              {id: 3, name: "Awesome Grape", price: 0.49}];
    }

    addToCart(item) {
      var found = false;
      var updatedCart = this.state.cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          found = true;
          cartItem.quantity++;
          return cartItem;
        } else {
          return cartItem;
        }
      });
      
      if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }
      
      this.setState({
        cart: updatedCart
      }, console.log(this.state.cart));


    }
  

  render() {
    return (
      <div>
      <nav>
        <h3>Products</h3>
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
