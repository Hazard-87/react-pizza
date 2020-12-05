import React from 'react';

import { CartEmpty, CartFull } from '../components';
const state = true;

function Cart() {
  return (
    <div class="content">
      <div class="container container--cart">{state ? <CartFull /> : <CartEmpty />}</div>
    </div>
  );
}

export default Cart;
