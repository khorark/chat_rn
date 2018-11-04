import React, { PureComponent } from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    ScrollView,
} from 'react-native'
import StyleSheet from 'react-native-adaptive-stylesheet'
import LinearGradient from 'react-native-linear-gradient'
import Image from 'react-native-remote-svg'
import { colors } from '../constants/colors'

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
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={[colors.turquoiseapprox, colors.iceCold]} style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/images/logo.svg')} style={styles.logoImage} />
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
                            <Image source={require('../assets/images/open_eye.svg')} style={styles.eyeImage} />
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
            await AsyncStorage.setItem('@PIN', value)
            console.log('Nabigate to App')
            console.log(value)

            // this.props.navigation.navigate('App')
        } catch (error) {
            console.error('Error saving data: ', error)
        }
    }

    private handleToggleHideMode = (): void => this.setState({ securityText: !this.state.securityText })
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    mainContainer: {
        flex: 1,
    },
    imageContainer: {
        marginTop: StyleSheet.scaleView(128),
        marginLeft: StyleSheet.scaleView(-55),
    },
    logoImage: {
        width: StyleSheet.scaleView(320),
        height: StyleSheet.scaleView(120),
    },
    eyeImage: {
        width: StyleSheet.scaleView(18),
        height: StyleSheet.scaleView(14),
    },
    inputContainer: {
        width: StyleSheet.scaleView(315),
        height: StyleSheet.scaleView(44),
        borderRadius: StyleSheet.scaleView(22),
        backgroundColor: '#fff',
        borderWidth: StyleSheet.scaleView(1),
        borderColor: '#d8d8d8',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: StyleSheet.scaleView(10),
        paddingVertical: StyleSheet.scaleView(1),
    },
    input: {
        flex: 1,
    },
    eyeContainer: {
        borderLeftWidth: 1,
        borderLeftColor: '#d8d8d8',
        paddingLeft: 10,
    },
})
