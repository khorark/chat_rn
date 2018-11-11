import React, { PureComponent } from 'react'
import { View, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Image from 'react-native-remote-svg'
import { ComponentEvent } from 'react-native-navigation'

import styles from './RegisterScreenStyles'
import { colors } from '../../constants/colors'
import { setValueToStorage } from '../../helpers/storageHelper'
import TouchableComponent from '../../components/TouchableComponent/TouchableComponent'
import { changeScreen } from '../../helpers/navigatorHelper'
import { NAVIGATOR_NAME } from '../../constants/navigator'


interface IRegisterState {
    securityText: boolean
    pass: string
}

export default class RegisterScreen extends PureComponent<ComponentEvent, IRegisterState> {
    public state = {
        securityText: true,
        pass: '',
    }

    public render() {
        console.log('this.props', this.props)

        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/logo.svg')} style={styles.logoImage} />
                    </View>
                    <ScrollView
                        keyboardShouldPersistTaps={'always'}
                        keyboardDismissMode={'on-drag'}
                        contentContainerStyle={styles.inputContainer}
                    >
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
                        <View style={styles.delimeter} />
                        <TouchableComponent style={styles.eyeContainer} onPress={this.handleToggleHideMode}>
                            <Image source={require('../../assets/images/open_eye.svg')} style={styles.eyeImage} />
                        </TouchableComponent>
                    </ScrollView>
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
            await setValueToStorage('@PIN', value)
            changeScreen(this.props.componentId, `${NAVIGATOR_NAME}LoginScreen`)
        } catch (error) {
            console.error('Error saving data: ', error)
        }
    }

    private handleToggleHideMode = (): void => this.setState({ securityText: !this.state.securityText })
}
