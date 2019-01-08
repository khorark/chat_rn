import React, { PureComponent, createRef } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ScrollView, TextInput, View, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'

import TouchableComponent from '../TouchableComponent/TouchableComponent'
import OpenEyeIcon from '../../assets/images/OpenEyeIcon'
import { getRemValue } from '../../helpers/stylesHelper'
import { colors } from '../../constants/colors'

interface IInputPinProps {
    onCallback: (value: string) => void
}

interface IInputPinState {
    securityText: boolean
}

export default class IInputPin extends PureComponent<IInputPinProps, IInputPinState> {
    public state = {
        securityText: true,
    }

    private inputRef: React.RefObject<TextInput> = createRef()

    public render() {
        const { securityText } = this.state

        return (
            <ScrollView
                keyboardShouldPersistTaps={'always'}
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={styles.inputContainer}
            >
                <TextInput
                    ref={this.inputRef}
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={4}
                    multiline={false}
                    returnKeyType={'done'}
                    textContentType={'password'}
                    onSubmitEditing={this.onSubmitEditing}
                    secureTextEntry={securityText}
                    underlineColorAndroid={'transparent'}
                />
                <View style={styles.delimeter} />
                <TouchableComponent style={styles.eyeContainer} onPress={this.toggleSecurityMode}>
                    <OpenEyeIcon width={18} heigth={14} />
                </TouchableComponent>
            </ScrollView>
        )
    }

    private onSubmitEditing = ({ nativeEvent: { text } }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        console.log(text)
        if (text && text.length === 4) {
            this.props.onCallback(text)
            this.inputRef.current && this.inputRef.current.clear()
        }
    }

    private toggleSecurityMode = (): void => this.setState({ securityText: !this.state.securityText })
}

const styles = EStyleSheet.create({
    inputContainer: {
        width: getRemValue(315),
        height: getRemValue(44),
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.alto,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: getRemValue(10),
        paddingVertical: getRemValue(1),
        marginTop: getRemValue(94),
    },
    input: {
        flex: 1,
    },
    delimeter: {
        marginVertical: getRemValue(5),
        backgroundColor: colors.alto,
        width: getRemValue(1),
        marginHorizontal: 10,
    },
    eyeContainer: {
        alignSelf: 'center',
    },
})
