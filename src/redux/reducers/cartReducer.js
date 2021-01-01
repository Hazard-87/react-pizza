const initialState = {};

const cart = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default cart;
