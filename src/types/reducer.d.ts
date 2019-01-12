export interface IReduxState {
    chat: IChatState
}

export interface IChatState {
    messages: IMessage[]
    isLoading: boolean
}

export interface IMessage {
    id: number
    author: string
    text: string
    date: Date
}
