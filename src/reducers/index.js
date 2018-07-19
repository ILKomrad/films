import { combineReducers } from 'redux';
import films from './films';
import filter from './filter';

const reducer = combineReducers({
    films,
    filter
});

export default reducer;
