/**
 * Created by arkadiy on 11.11.18.
 */
import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../constants/colors'
import styles from './LoginScreenStyles'
import Indicator from '../../components/Indicator/Indicator'
import DeleteIcon from '../../assets/images/DeleteIcon'
import LogoIcon from '../../assets/images/LogoIcon'


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
                        <LogoIcon width={235} height={69} fill={'#fff'}/>
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
                                    <DeleteIcon width={45} height={33} fill={'#fff'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
