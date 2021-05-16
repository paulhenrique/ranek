import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './components/Produtos';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Produtos} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
