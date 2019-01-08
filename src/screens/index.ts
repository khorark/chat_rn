import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import store from '../redux/store'

import RegisterScreen from './RegisterScreen/RegisterScreen'
import LoginScreen from './LoginScreen/LoginScreen'
import CheckedScreen from './CheckedScreen/CheckedScreen'
import { NAVIGATOR_NAME } from '../constants/navigator'
import ChatScreen from './ChatScreen/ChatScreen'

export const registerScreens = () => {
    Navigation.registerComponent(`${NAVIGATOR_NAME}RegisterScreen`, () => RegisterScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}LoginScreen`, () => LoginScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}CheckedScreen`, () => CheckedScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}ChatScreen`, () => ChatScreen)
}
