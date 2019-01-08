import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ComponentEvent } from 'react-native-navigation'

import styles from './RegisterScreenStyles'
import { colors } from '../../constants/colors'
import { setValueToStorage } from '../../helpers/storageHelper'
import { changeScreen } from '../../helpers/navigatorHelper'
import { NAVIGATOR_NAME } from '../../constants/navigator'
import LogoIcon from '../../assets/images/LogoIcon'
import { PIN } from '../../constants/storage'
import IInputPin from '../../components/InputPin/InputPin'

export default class RegisterScreen extends PureComponent<ComponentEvent> {
    public render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <LogoIcon width={414} height={120} fill={colors.white} />
                    </View>
                    <IInputPin onCallback={this.handleInputOnSubmitEditing} />
                </LinearGradient>
            </ScrollView>
        )
    }

    private savePassToStorage = async (value: string) => {
        try {
            await setValueToStorage(PIN, value)
            return true
        } catch (error) {
            console.error('Error saving data: ', error)
            return false
        }
    }

    private handleInputOnSubmitEditing = async (value: string) => {
        const isSave = await this.savePassToStorage(value)
        if (isSave) changeScreen(this.props.componentId, `${NAVIGATOR_NAME}ChatScreen`)
    }
}
