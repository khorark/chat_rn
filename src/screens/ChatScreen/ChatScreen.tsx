import React, { PureComponent } from 'react'
import { View, StyleSheet, BackHandler, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { colors } from '../../constants/colors'
import InputMessage from '../../components/InputMessage/InputMessage'
import { IReduxState } from '../../types/reducer'
import { getMessages, addMessage, removeMessage } from '../../redux/actions/chatActions'

const mapStateTopProps = ({ chat }: IReduxState) => ({
    messages: chat.messages,
    isLoading: chat.messages,
})

const mapDispatchTopProps = (disptach: Dispatch) => ({
    getMessages: bindActionCreators(getMessages, disptach),
    addMessage: bindActionCreators(addMessage, disptach),
    removeMessage: bindActionCreators(removeMessage, disptach),
})

@(connect as any)(mapStateTopProps, mapDispatchTopProps)
export default class ChatScreen extends PureComponent {
    public componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public render() {
        console.log(this.props)

        return (
            <View style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.messagesContainer} />
                <InputMessage onCallback={this.handleSendMessage} />
            </View>
        )
    }

    private handleBackButtonClick = () => {
        BackHandler.exitApp()
        return false
    }

    private handleSendMessage = (text: string) => {
        console.log(text)
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: colors.galleryapprox,
        paddingHorizontal: 16,
        paddingVertical: 17,
    },
    messagesContainer: {
        flexGrow: 1,
    },
})
