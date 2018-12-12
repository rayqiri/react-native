import { createStackNavigator, createAppContainer } from 'react-navigation'

import Datas from '../screens/Datas'
import DatasCreate from '../screens/DatasCreate'
import Details from '../screens/Details'
const MenuNavigator = createStackNavigator({
    Datas: {
        screen: Datas,
        navigationOptions: {
            headerTitle: 'Data',
        },
    },
    DatasCreate: {
        screen: DatasCreate,
        navigationOptions: {
            headerTitle: 'Tambah Data',
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            headerTitle: 'Details',
        },
    }
    
})
const AppNavigator = createAppContainer(MenuNavigator)
export default AppNavigator 
//export const AppNavigator = createAppContainer(MenuNavigator)