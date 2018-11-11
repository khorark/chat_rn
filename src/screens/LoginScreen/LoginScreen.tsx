/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { View } from 'react-native'
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
        const { pass } = this.state

        return (
            <View style={styles.mainContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.lineGDContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/logo.svg')} style={styles.logoImage}/>
                    </View>
                    <View style={styles.centerContainer}>
                        <View style={styles.inputContainer}>
                            {Array.from(Array(4).keys()).map((key: number) => (
                                <View key={key} style={[styles.circle, pass.length > key ? styles.circleFill : null]}/>
                            ))}
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
