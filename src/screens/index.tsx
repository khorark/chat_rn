import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import RegisterScreen from './RegisterScreen/RegisterScreen'
import LoginScreen from './LoginScreen/LoginScreen'
import CheckedScreen from './CheckedScreen/CheckedScreen'
import ChatScreen from './ChatScreen/ChatScreen'
import { NAVIGATOR_NAME } from '../constants/navigator'
import { Store } from 'redux'

export const registerScreens = (store: Store) => {
    Navigation.registerComponent(`${NAVIGATOR_NAME}RegisterScreen`, () => RegisterScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}LoginScreen`, () => LoginScreen)
    Navigation.registerComponent(`${NAVIGATOR_NAME}CheckedScreen`, () => CheckedScreen)
    Navigation.registerComponent(
        `${NAVIGATOR_NAME}ChatScreen`,
        () => (props: any) => (
            <Provider store={store}>
                <ChatScreen {...props} />
            </Provider>
        ),
        () => ChatScreen,
    )
}
