import React from 'react';
import { useSelector } from 'react-redux';

import { CartEmpty, CartFull } from '../components';

function Cart() {
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));

  return (
    <div className="content">
      <div className="container container--cart">
        {!items[0] ? <CartEmpty /> : <CartFull items={items} />}
      </div>
    </div>
  );
}

export default Cart;
