import React from 'react'
import { Provider } from 'react-redux'
import StyleSheet from 'react-native-adaptive-stylesheet'

import createStore from './redux/store'
import RegisterScreen from './screens/RegisterScreen'

const store = createStore()

StyleSheet.setGuidelineBaseWidth(375);


const App = () => (
    <Provider store={store}>
        <RegisterScreen />
    </Provider>
)

export default App
