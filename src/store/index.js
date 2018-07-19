import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);
const dispatch = store.dispatch;

store.dispatch = action => {
    if (typeof action.then === 'function') {
        return action.then(dispatch);
    }

    return dispatch(action);
}

export default store;