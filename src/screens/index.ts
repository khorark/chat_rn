import { Navigation } from 'react-native-navigation'
import RegisterScreen from './RegisterScreen/RegisterScreen'
import { Provider } from 'react-redux'
import { Test } from './Test'
import store from '../redux/store'
import LoginScreen from './LoginScreen/LoginScreen'
import { NAVIGATOR_NAME } from '../constants/navigator'


export const registerScreens = () => {
    Navigation.registerComponent(`${NAVIGATOR_NAME}RegisterScreen`, () => RegisterScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}LoginScreen`, () => LoginScreen)
}
