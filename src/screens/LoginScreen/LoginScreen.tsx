/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../constants/colors'
import styles from './LoginScreenStyles'
import Indicator from '../../components/Indicator/Indicator'
import LogoIcon from '../../assets/images/LogoIcon'
import NumPad from '../../components/NumPad/NumPad'

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
                        <LogoIcon width={235} height={69} fill={'#fff'} />
                    </View>
                    <View style={styles.centerContainer}>
                        <Indicator length={pass.length} />
                        <NumPad handlePressKey={this.handlePressKey} />
                    </View>
                </LinearGradient>
            </View>
        )
    }

    private handlePressKey(value: string) {
        console.log('value => ', value)
        let pass = ''

        if (value === 'del') {
            pass = this.state.pass.slice(0, -1)
        } else {
            pass = this.state.pass + value
        }

        this.setState({ pass })
    }
}
