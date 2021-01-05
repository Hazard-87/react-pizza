import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartEmpty, CartFull } from '../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cartAC';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveCartItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить пиццу?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusCartItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount === 0 ? (
          <CartEmpty />
        ) : (
          <CartFull
            totalCount={totalCount}
            totalPrice={totalPrice}
            items={items}
            onClearCart={onClearCart}
            onRemoveCartItem={onRemoveCartItem}
            onPlus={onPlusCartItem}
            onMinus={onMinusCartItem}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
