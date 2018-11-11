import { Navigation } from 'react-native-navigation'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { registerScreens } from './screens'

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

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'navigation.chat_rn.RegisterScreen',
                            },
                        },
                    ],
                },
            },
        })
    })
}
