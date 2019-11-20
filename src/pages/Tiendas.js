import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Tiendas.css';
import TiendasList from '../components/TiendasList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Tiendas extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    // cantidadSucursales: 0
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.tiendas.list();

      // console.log(data);

      // let nombre = undefined;
      // let sucursales = {};
      // let idTienda = undefined;

      // const sucursalesData = data.forEach(dat => {

         // nombre = dat.nombre;
         // sucursales = dat.sucursales;


         // Calculando productos en cada una de las sucursales

         // sucursales.forEach(sucursal => sucursal.productos.forEach(p => cantidadProductos = cantidadProductos + 1 ))

         // sucursales.forEach( (sucursal) =>  {
         //    // idTienda = sucursal.idTienda;
         //
         //    if (dat.id === idTienda) {
         //      // console.log("Coincidencia en "+idTienda);
         //    } else {
         //      // console.log(contadorSucursales);
         //    }
         //
         // } );

         // console.log(`${nombre} tiene ${sucursales.length} sucursales`);

         this.setState({ loading: false, data: data });


      // } );


      // console.log(cantidadProductos)


    } catch (error) {
      this.setState({ loading: false, error: error, cantidadSucursales: 0 });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>

        <div className="Tiendas__container">
          <div className="Tiendas__buttons">
            <Link to="/" className="btn btn-secondary">
              Ir a Inicio
            </Link>
          </div>

          <TiendasList tiendas={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Tiendas;
