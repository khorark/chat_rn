export interface IReduxState {
    chat: IChatState
}

export interface IChatState {
    messages: IMessage[]
    isLoading: boolean
}

export interface IMessage {
    id: string
    text: string
    date: Date
}
