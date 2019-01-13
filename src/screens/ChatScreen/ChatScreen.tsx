import React, { PureComponent } from 'react'
import { View, StyleSheet, BackHandler, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import shortid from 'shortid'

import { colors } from '../../constants/colors'
import InputMessage from '../../components/InputMessage/InputMessage'
import { IReduxState, IChatState } from '../../types/reducer'
import { getMessages, sendMessage, removeMessage } from '../../redux/actions/chatActions'
import { ComponentEvent } from 'react-native-navigation'
import { ISendMessagePayload, IRemoveMessagePayload } from '../../types/actions'

interface IDispatchProps {
    getMessages: () => void
    sendMessage: (payload: ISendMessagePayload) => void
    removeMessage: (payload: IRemoveMessagePayload) => void
}

interface IChatScreenProps extends ComponentEvent, IDispatchProps, IChatState {}

const mapStateTopProps = ({ chat }: IReduxState) => ({
    messages: chat.messages,
    isLoading: chat.messages,
})

const mapDispatchTopProps = (disptach: Dispatch) => ({
    getMessages: bindActionCreators(getMessages, disptach),
    sendMessage: bindActionCreators(sendMessage, disptach),
    removeMessage: bindActionCreators(removeMessage, disptach),
})

@(connect as any)(mapStateTopProps, mapDispatchTopProps)
export default class ChatScreen extends PureComponent<IChatScreenProps> {
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
        const uniqueId = shortid.generate()
        const payload = {
            message: {
                id: uniqueId,
                text,
                date: new Date(),
            },
        }

        this.props.sendMessage(payload)
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
