import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import Axios from 'axios';
import {API_URL} from '../constants'
//reducer
const userInitialState = {
    username : ""
}
const siswaInitialState ={
    data :[],
    isLoading : false
    }
const isdoneInitialState = {
    isdone : 0
}
const isdoneReducer = function (state = isdoneInitialState, action){
    switch (action.type) {
        case "SISWA_CHANGE_ISDONE": 
            state = {...state , isdone : action.payload }
            break;
    
        default:
        state
            break;
    }
    return state
}
const siswaReducer = function (state = siswaInitialState, action) {
    switch (action.type) {
        case "FETCH_ALL_FULFILLED":
            state = { ...state, isLoading : true, data: action.payload.data }
            break;
        case "FETCH_ALL_PENDING":
            state = { ...state, isLoading : true }
            break;

        default:
            state
            break;
    }
    return state
}

const userReducer =  function (state = userInitialState, action){
    switch (action.type) {
        case "USER_CHANGE_USERNAME":
            state = { ...state, username: action.payload }
            break;

        default:
            state
            break;
    }
    return state
}
//store
const rootReducers = combineReducers({
    siswaReducer,
    userReducer,
    isdoneReducer
})
const middlewares = applyMiddleware(promiseMiddleware)
const store = createStore(rootReducers, middlewares)

//subscribe
store.subscribe(()=>{
    console.log(store.getState())
})
//dispatcher
store.dispatch({type:"USER_CHANGE_USERNAME",payload : "rayqiri"})
store.dispatch({ type: "SISWA_CHANGE_ISDONE", payload: 1 })
store.dispatch({ type: "FETCH_ALL", payload: Axios.get(`${API_URL}/siswa`) })