import React from 'react';
import { useSelector } from 'react-redux';

import { CartEmpty, CartFull } from '../components';

function Cart() {
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));
  return (
    <div class="content">
      <div class="container container--cart">
        {items ? <CartFull items={items} /> : <CartEmpty />}
      </div>
    </div>
  );
}

export default Cart;
