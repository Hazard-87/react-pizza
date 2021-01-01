import axios from 'axios';

export const fetchPizzas = () => async (dispatch) => {
  let response = await axios.get('http://localhost:3001/pizzas');
  dispatch(setPizzas(response.data));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
