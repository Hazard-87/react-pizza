import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import pizzasReducer from './pizzasReducer';

const rootReducer = combineReducers({ filtersReducer, pizzasReducer });

export default rootReducer;
