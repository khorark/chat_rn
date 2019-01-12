import React, { PureComponent, createRef } from 'react'
import {
    View,
    Image,
    ScrollView,
    TextInput,
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { getRemValue } from '../../helpers/stylesHelper'
import TouchableComponent from '../TouchableComponent/TouchableComponent'
import SendIcon from '../../assets/images/SendIcon'
import { colors } from '../../constants/colors'

export default class InputMessage extends PureComponent {
    public state = {
        height: 44,
    }

    private readonly MAX_HEIGHT_INPUT = 160

    private inputRef: React.RefObject<TextInput> = createRef()

    public render() {
        const { height } = this.state

        return (
            <View style={styles.mainContainer}>
                <Image source={require('../../assets/images/ava/ava.png')} style={styles.ava} />
                <ScrollView
                    keyboardShouldPersistTaps={'always'}
                    keyboardDismissMode={'on-drag'}
                    contentContainerStyle={[styles.inputContainer, { height }]}
                >
                    <TextInput
                        ref={this.inputRef}
                        style={styles.input}
                        multiline={true}
                        underlineColorAndroid={'transparent'}
                        onContentSizeChange={this.onContentSizeChange}
                    />
                    <TouchableComponent style={styles.sendContainer}>
                        <SendIcon width={22} height={21} fill={colors.gray} />
                    </TouchableComponent>
                </ScrollView>
            </View>
        )
    }

    private onContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) =>
        this.updateSize(e.nativeEvent.contentSize.height)

    private updateSize = (height: number) => {
        if (height < this.MAX_HEIGHT_INPUT) {
            this.setState({
                height,
            })
        }
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
    },
    ava: {
        width: getRemValue(44),
        height: getRemValue(44),
    },
    inputContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: getRemValue(22),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.alto,
        alignSelf: 'center',
        paddingHorizontal: getRemValue(10),
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
        paddingHorizontal: getRemValue(10),
        paddingBottom: getRemValue(5),
        marginVertical: getRemValue(5),
        alignItems: 'flex-end',
    },
})
