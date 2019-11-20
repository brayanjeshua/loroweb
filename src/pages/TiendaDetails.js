import React from 'react';
import { Link } from 'react-router-dom';

import './styles/TiendaDetails.css';
import Tienda from '../components/Tienda';

function TiendaDetails(props) {
  const tienda = props.tienda;

  const [productos] = tienda.sucursales.map(sucursal => sucursal.productos );

  // console.log(prod);

  return (
    <div>
      <div className="container mt-3">

        <div className="row">

          <div className="col">
            <Tienda
              nombre={tienda.nombre}
              email={tienda.email}
              logoURL={tienda.logoURL}
              productos={productos}
            />
          </div>

        </div>

      </div>

        <div className="mt-3 Buttons__End">
          <Link to="/" className="btn btn-secondary mr-3">
            Ir a Inicio
          </Link>
          <Link to="/tiendas" className="btn btn-secondary">
            Ver Tiendas
          </Link>
        </div>

    </div>
  );
}

export default TiendaDetails;
