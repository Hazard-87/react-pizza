import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import './scss/app.scss';

import { Header, Home, Cart } from './components/';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(async () => {
    let response = await axios.get('http://localhost:3000/db.json');
    setPizzas(response.data.pizzas);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
