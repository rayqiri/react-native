

import { Provider, connect } from 'react-redux'
import React,{Component} from 'react'
import store from './reducers'
import AppWithNavigationState from './navigators'




// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}