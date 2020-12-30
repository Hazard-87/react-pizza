import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import pizzasReducer from './pizzasReducer';

const rootReducer = combineReducers({ filters: filtersReducer, pizzas: pizzasReducer });

export default rootReducer;
