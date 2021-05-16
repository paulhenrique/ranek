import React from 'react';

import './assets/styles/global.scss';

import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Contato from './components/Contato';

ReactDOM.render(
  <div className="App">

    <BrowserRouter>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Produtos} />
          <Route path="/contato" component={Contato} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
