import React from 'react'
import { Dimensions } from 'react-native'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import createStore from './redux/store'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'

const store = createStore()
const { height, width } = Dimensions.get('window');

EStyleSheet.build({
    $width: width,
    $height: height,
    $rem: width > 340 ? 18 : 16,
});

const App = () => (
    <Provider store={store}>
        <RegisterScreen />
    </Provider>
)

export default App
