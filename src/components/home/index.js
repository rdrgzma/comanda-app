import React, { Component } from "react";

import CardBar from "../cardBar";
import "./home.css"

const URL='https://comanda-server.herokuapp.com'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            estabelecimentos: []    
          }
    }

    componentDidMount(){
        fetch(URL+'/estabelecimentos', {
          method: 'get'
        }).then(response => {
          return response.json()  
        }).then(data =>{
          console.log(data)
          this.setState({
            estabelecimentos: data
          })
          return data
    
        })
    
      }
      render() {
        if(!this.state.estabelecimentos) return <p>Carregando ...</p>
        return (
          <div>
          <section>
            <h3 className="titulo">Estabelecimentos</h3>
          </section>
            <main className="container-fluid cardBar">  
              {this.state.estabelecimentos.map((esta) => {
                return   <CardBar
                key={esta.id}
                nome={esta.nome}
                
              />
             
              })}
            </main>
        </div>
        );
      }
}
export default Home;