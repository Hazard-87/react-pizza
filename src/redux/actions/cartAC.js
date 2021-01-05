export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const setTotalPrice = (items) => ({
  type: 'SET_TOTAL_PRICE',
  payload: items,
});

export const setTotalCount = (items) => ({
  type: 'SET_TOTAL_COUNT',
  payload: items,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id, totalCount, totalPrice) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id, totalCount, totalPrice) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
