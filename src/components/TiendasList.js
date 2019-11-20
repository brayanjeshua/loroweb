import React from 'react';
import { Link } from 'react-router-dom';

import './styles/TiendasList.css';

const componenteActual = "tiendas";

class TiendasListItem extends React.Component {


  render() {

    // Pintar cada elemento del JSON
    return (
      <div className="TiendasListItem">

        <img
          className="TiendasListItem__avatar"
          src={this.props.tienda.logoURL}
          alt={`Logo de ${this.props.tienda.nombre}`}
        />

        <div>
          <strong>
            {this.props.tienda.nombre}
          </strong>
          <br />{this.props.tienda.email}
          <br />

          Cuenta con <b>{this.props.tienda.sucursales.length} sucursales</b>
        </div>

      </div>
    );
  }

}

function useSearchTienda(tiendas) {
  const [query, setQuery] = React.useState('');
  const [filteredTiendas, setFilteredTienda] = React.useState(tiendas);

  // Hook para Guardar en memoria la busqueda y la app sea mas rapida
  React.useMemo(() => {
    const result = tiendas.filter(tienda => {
      // Busqueda en filtro que coincidan con el Json (se pueden agregar mas variables)
      return `${tienda.nombre}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredTienda(result);
  }, [tiendas, query]);

  return { query, setQuery, filteredTiendas };
}

function TiendasList(props) {
  const tiendas = props.tiendas;

  const { query, setQuery, filteredTiendas } = useSearchTienda(tiendas);

  if (filteredTiendas.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar {componenteActual}</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No se han encontrado {componenteActual} que coincidan con {query}</h3>
      </div>
    );
  }

  return (
    <div className="TiendasList">
      <div className="form-group">
        <label>Filtrar {componenteActual}</label>
        <input
          placeholder="Escribe para Buscar"
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredTiendas.map(tienda => {
          return (
            <li key={tienda.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/tiendas/${tienda.id}`}
              >
                <TiendasListItem tienda={tienda} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TiendasList;
