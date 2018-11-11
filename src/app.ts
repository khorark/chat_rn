import { Navigation } from 'react-native-navigation'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { registerScreens } from './screens'
import { getValueFromStorage } from './helpers/storageHelper'
import { NAVIGATOR_NAME } from './constants/navigator'

const { height, width } = Dimensions.get('window')

export const start = () => {
    EStyleSheet.build({
        $width: width,
        $height: height,
        $rem: width > 340 ? 18 : 16,
    })

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
        },
    })

    registerScreens()

    Navigation.events().registerAppLaunchedListener(async () => {
        const storeHasData = await checkDataStorage()
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

/**
 * Проверка, есть ли данные в хранилище
 */
const checkDataStorage = async () => {
    const value = await getValueFromStorage('@PIN')

    return !!value
}
