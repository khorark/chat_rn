import React, { PureComponent } from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Image from 'react-native-remote-svg'

import styles from './RegisterScreenStyles'
import { colors } from '../../constants/colors'
import { setValueToStorage } from '../../helpers/storageHelper'

interface IRegisterState {
    securityText: boolean
    pass: string
}

export default class RegisterScreen extends PureComponent<{}, IRegisterState> {
    public state = {
        securityText: true,
        pass: '',
    }

    public render() {
        return (
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/logo.svg')} style={styles.logoImage} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType={'numeric'}
                            maxLength={4}
                            multiline={false}
                            returnKeyType={'done'}
                            textContentType={'password'}
                            onSubmitEditing={this.onSubmitEditing}
                            onChangeText={this.onChangeText}
                            secureTextEntry={this.state.securityText}
                            underlineColorAndroid={'transparent'}
                        />
                        <TouchableOpacity style={styles.eyeContainer} onPress={this.handleToggleHideMode}>
                            <Image source={require('../../assets/images/open_eye.svg')} style={styles.eyeImage} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        )
    }

    private onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        this.storeData()
    }

    private onChangeText = (pass: string) => this.setState({ pass })

    private storeData = async () => {
        const value = this.state.pass

        if (!value) {
            return false
        }
        try {
            const result = setValueToStorage('@PIN', value)
            console.log(result)

            // this.props.navigation.navigate('App')
        } catch (error) {
            console.error('Error saving data: ', error)
        }
    }

    private handleToggleHideMode = (): void => this.setState({ securityText: !this.state.securityText })
}
