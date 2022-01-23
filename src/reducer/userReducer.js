import {GET_USER, LOG_OUT, LOGIN_USER} from "../actions/types";

const initState = {
    token: "",
    user: {}
}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER:
            return Object.assign(state, action.payload);
        case LOGIN_USER:
            return {...state, token: action.payload.token, user: action.payload.user};
        case LOG_OUT:
            return {...state, token: action.payload.token, user: action.payload.user};
        default:
            return state
    }
}