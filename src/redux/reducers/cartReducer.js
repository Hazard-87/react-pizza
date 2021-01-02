const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
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
