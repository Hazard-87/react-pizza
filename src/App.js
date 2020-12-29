import React from 'react';
import { Route } from 'react-router-dom';

import './scss/app.scss';

import { Header, Home, Cart } from './components/';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
