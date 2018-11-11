/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Image from 'react-native-remote-svg'

import { colors } from '../../constants/colors'
import styles from './LoginScreenStyles'

interface ILoginScreenState {
    pass: string
}

export default class LoginScreen extends PureComponent<{}, ILoginScreenState> {
    public state = {
        pass: '',
    }

    public render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.mainContainer}>
                    <Image source={require('../../assets/images/logo.svg')} style={styles.logoImage}/>
                </LinearGradient>
            </ScrollView>
        )
    }
}
