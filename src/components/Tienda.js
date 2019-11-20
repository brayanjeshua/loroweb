import React from 'react';

import './styles/Tienda.css';

class Tienda extends React.Component {

  render() {
    return (
      <div className="Tienda">

        <div className="Tienda__section-name">
            <img
              className="Tienda__avatar"
              src={this.props.logoURL}
              alt={`Logo de ${this.props.nombre}`}
            />
          <h1>
            {this.props.nombre} <br />
          </h1>
        </div>

        <div className="Tienda__section-mail">
          <div>{this.props.email}</div>
        </div>

        <div className="Tienda__products">
          Productos:
          { this.props.productos.map( producto => ` ${producto.nombre } $ ${producto.precio} , `) }


        </div>
      </div>
    );
  }

}

export default Tienda;
