import AppNavigator from '../navigators/AppNavigator'
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers'
import promiseResolver from 'redux-promise-resolver'
import siswaReducer from './siswa'


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Datas'));
const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state;
}
const appReducer = combineReducers({
    nav: navReducer,
    siswaReducer: siswaReducer
})
const middleware = createReactNavigationReduxMiddleware(
    "App",
    state => state.nav,
    logger,
    promiseResolver,
    promiseMiddleware()
)



const store = createStore(
    appReducer,
    applyMiddleware(middleware),
)

export default store