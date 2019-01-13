import React, { PureComponent, createRef } from 'react'
import { View, BackHandler, FlatList, RefreshControl } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { ComponentEvent } from 'react-native-navigation'
import shortid from 'shortid'

import { colors } from '../../constants/colors'
import InputMessage from '../../components/InputMessage/InputMessage'
import { getMessages, sendMessage, removeMessage } from '../../redux/actions/chatActions'
import { ISendMessagePayload, IRemoveMessagePayload } from '../../types/actions'
import { IReduxState, IChatState, IMessage } from '../../types/reducer'
import { getRemValue } from '../../helpers/stylesHelper'
import Message from '../../components/Message/Message'

interface IDispatchProps {
    getMessages: () => void
    sendMessage: (payload: ISendMessagePayload) => void
    removeMessage: (payload: IRemoveMessagePayload) => void
}

interface IChatScreenProps extends ComponentEvent, IDispatchProps, IChatState {}

const mapStateTopProps = ({ chat }: IReduxState) => ({
    messages: chat.messages,
    isLoading: chat.isLoading,
})

const mapDispatchTopProps = (disptach: Dispatch) => ({
    getMessages: bindActionCreators(getMessages, disptach),
    sendMessage: bindActionCreators(sendMessage, disptach),
    removeMessage: bindActionCreators(removeMessage, disptach),
})

@(connect as any)(mapStateTopProps, mapDispatchTopProps)
export default class ChatScreen extends PureComponent<IChatScreenProps> {
    private flatListRef: React.RefObject<FlatList<IMessage>> = createRef()

    public componentDidMount() {
        this.props.getMessages()
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    public renderItem = ({ item }: { item: IMessage }) => (
        <Message id={item.id} text={item.text} onCallback={this.handleRemoveMessage} />
    )

    public renderItemSeparator = () => <View style={styles.separator} />

    public render() {
        const { messages, isLoading } = this.props

        return (
            <View style={styles.mainContainer}>
                <FlatList
                    ref={this.flatListRef}
                    onContentSizeChange={this.scrollToEnd}
                    onLayout={this.scrollToEnd}
                    data={messages}
                    contentContainerStyle={styles.messagesContainer}
                    refreshControl={<RefreshControl refreshing={isLoading} colors={[colors.tealish]} />}
                    extraData={messages.length}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    keyExtractor={this.keyExtractor}
                />
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

    private handleRemoveMessage = (id: string) => this.props.removeMessage({ id })

    private keyExtractor = ({ id }: IMessage) => id

    private scrollToEnd = () => this.flatListRef.current && this.flatListRef.current.scrollToEnd()
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.galleryapprox,
        paddingHorizontal: getRemValue(16),
        paddingVertical: getRemValue(17),
    },
    messagesContainer: {
        flexGrow: 1,
        paddingBottom: getRemValue(20),
    },
    separator: {
        height: getRemValue(20),
    },
})
