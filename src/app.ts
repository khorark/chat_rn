import { Navigation } from 'react-native-navigation'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import createStore from './redux/store'
import { registerScreens } from './screens'
import { checkDataStorage, setValueToStorage } from './helpers/storageHelper'
import { NAVIGATOR_NAME } from './constants/navigator'
import { PIN } from './constants/storage'

const { height, width } = Dimensions.get('window')
const store = createStore()

export const start = () => {
    EStyleSheet.build({
        $width: width,
        $height: height,
        $rem: width > 340 ? 18 : 16,
    })

    registerScreens(store)

    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.setDefaultOptions({
            topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
            },
        })

        // Удалени PIN кода
        // await setValueToStorage(PIN, '')

        const storeHasData = await checkDataStorage(PIN)
        const name = storeHasData ? `${NAVIGATOR_NAME}LoginScreen` : `${NAVIGATOR_NAME}RegisterScreen`

        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name,
                            },
                        },
                    ],
                },
            },
        })
    })
}
