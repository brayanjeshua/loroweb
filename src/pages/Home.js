import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import loroImage from '../images/logo-loro.svg';
import gestionImage from '../images/gestion.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={loroImage}
                alt="Logo Loro"
                className="img-fluid mb-2"
              />

            <h1>Manejo de Inventario Web</h1>
              <Link className="btn btn-secondary" to="/tiendas">
                Ver las tiendas
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={gestionImage}
                alt="Inventario"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
