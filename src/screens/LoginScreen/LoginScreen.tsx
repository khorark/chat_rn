/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Image from 'react-native-remote-svg'

import { colors } from '../../constants/colors'
import styles from './LoginScreenStyles'
import Indicator from '../../components/Indicator/Indicator'

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
                        <Indicator length={pass.length}/>

                        <View style={styles.containerNumPad}>
                            {Array.from(Array(9).keys()).map((key: number) => (
                                <TouchableOpacity key={key} style={styles.numberContainer}>
                                    <Text style={styles.numberText}>{key + 1}</Text>
                                </TouchableOpacity>
                            ))}
                            <View style={styles.bottomNumPad}>
                                <TouchableOpacity style={styles.numberContainer}>
                                    <Text style={styles.numberText}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteContainer}>
                                    <Image
                                        source={require('../../assets/images/delete.svg')}
                                        style={styles.deleteImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
