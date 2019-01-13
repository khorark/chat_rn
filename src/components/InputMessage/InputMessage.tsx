import React, { PureComponent } from 'react'
import {
    View,
    ScrollView,
    TextInput,
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData,
    Keyboard,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { getRemValue } from '../../helpers/stylesHelper'
import TouchableComponent from '../TouchableComponent/TouchableComponent'
import SendIcon from '../../assets/images/SendIcon'
import { colors } from '../../constants/colors'
import Avatar from '../Avatar/Avatar'

interface InputMessageProps {
    onCallback: (value: string) => void
}

interface InputMessageState {
    text: string
    height: number
}

export default class InputMessage extends PureComponent<InputMessageProps, InputMessageState> {
    public state = {
        text: '',
        height: 44,
    }

    private readonly MAX_HEIGHT_INPUT = 160
    private readonly PLACEHOLDER = 'Напишите что-то...'

    public render() {
        const { text, height } = this.state

        return (
            <View style={styles.mainContainer}>
                <Avatar id={0} size={44} />
                <ScrollView
                    keyboardShouldPersistTaps={'always'}
                    keyboardDismissMode={'on-drag'}
                    contentContainerStyle={[styles.inputContainer, { height }]}
                >
                    <TextInput
                        value={text}
                        style={styles.input}
                        multiline={true}
                        placeholder={this.PLACEHOLDER}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeText}
                        onContentSizeChange={this.onContentSizeChange}
                    />
                    <TouchableComponent style={styles.sendContainer} onPress={this.sendText}>
                        <SendIcon width={22} height={21} fill={text ? colors.tealish : colors.gray} />
                    </TouchableComponent>
                </ScrollView>
            </View>
        )
    }

    private onChangeText = (text: string) => this.setState({ text })

    private onContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) =>
        this.updateSize(e.nativeEvent.contentSize.height)

    private updateSize = (height: number) => {
        if (height < this.MAX_HEIGHT_INPUT) {
            this.setState({
                height,
            })
        }
    }

    private sendText = () => {
        if (this.state.text) {
            this.props.onCallback(this.state.text)
            this.setState({ text: '' })
        }
        Keyboard.dismiss()
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
    },
    inputContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.alto,
        alignSelf: 'center',
        paddingLeft: getRemValue(10),
        paddingRight: getRemValue(7),
        paddingVertical: getRemValue(1),
        marginLeft: 16,
    },
    input: {
        flex: 1,
    },
    sendContainer: {
        flexDirection: 'row',
        borderColor: colors.alto,
        borderLeftWidth: 1,
        paddingLeft: getRemValue(7),
        paddingBottom: getRemValue(5),
        marginVertical: getRemValue(5),
        alignItems: 'flex-end',
    },
})
