import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Tiendas from '../pages/Tiendas';
import TiendaDetails from '../pages/TiendaDetailsContainer';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tiendas" component={Tiendas} />
          <Route exact path="/tiendas/:tiendaId" component={TiendaDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
