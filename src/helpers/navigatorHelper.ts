import { Navigation } from 'react-native-navigation'

export const changeScreen = (componentId: string, screenName: string) => {
    Navigation.push(componentId, {
        component: {
            name: screenName,
        },
    })
}