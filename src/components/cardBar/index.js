import React, { Component } from 'react'

class CardBar extends Component {

    render () {
        return <div>
            <section id="intro" className="container card">
              <div>
                <img className="card-img-top" src={this.props.imageURL} alt="imagem" />
                <div className="card-body">
                  <h2 className="card-text">{this.props.nome}</h2>
                  
                </div>
              </div>
            </section>
          </div>;
    }
}

export default CardBar;