import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducer';
import {getToken, getUser} from "./auth/storage";

const store = createStore(reducers, {
    user: {
        token: getToken(),
        user: getUser(),
    } || {}
}, applyMiddleware(reduxThunk));


export default store;