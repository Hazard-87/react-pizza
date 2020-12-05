import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';

import img from '../assets/img/empty-cart.png';

function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вы ещё не заказали пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={img} alt="Empty cart" />
      <Link to="/">
        <Button className="button button--black">Вернуться назад</Button>
      </Link>
    </div>
  );
}

export default CartEmpty;
