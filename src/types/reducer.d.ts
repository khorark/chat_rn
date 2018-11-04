export interface IReduxState {
    messages: IMessage[],
    isLoading: boolean,
}

export interface IMessage {
    id: number,
    author: string,
    text: string,
    date: Date,
}