import axios from 'axios';

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  dispatch(setLoaded(false));
  let response = await axios.get(
    `/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sortBy}&_order=asc`,
  );
  dispatch(setPizzas(response.data));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});
