import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "../navbar";
import Home from "../home";

import Comanda from "../comanda";
//import Pedido from "./";
//import Atendimento from "./Atendimento";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
          <Route path="/" exact render={(props) => <Home  nome="marcio"/>}  />
          
            <Route path="/comanda" render={(props) => <Comanda  nome="marcio"/>}  />
            
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
