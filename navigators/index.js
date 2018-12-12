import {
    reduxifyNavigator
} from 'react-navigation-redux-helpers'
import AppNavigator from '../navigators/AppNavigator'
import { connect } from 'react-redux'

const AppState = reduxifyNavigator(AppNavigator, "App");
const mapStateToProps = (state) => ({
    state: state.nav,
})
const AppWithNavigationState = connect(mapStateToProps)(AppState)
export default AppWithNavigationState