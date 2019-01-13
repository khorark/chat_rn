import { Action, AnyAction } from 'redux'
import { Type } from '../redux/actions/chatActions'
import { IMessage } from './reducer'

export interface ISendMessage extends Action, ISendMessagePayload {
    type: Type.SEND_MESSAGE
}

export interface IRemoveMessage extends Action {
    type: Type.REMOVE_MESSAGE
    id: string
}

export interface ILoading extends Action {
    type: Type.IS_LOADING
    isLoading: boolean
}

export interface ISendMessagePayload {
    message: IMessage
}

export interface IRemoveMessagePayload {
    id: string
}

export type ChatActions = ISendMessage | IRemoveMessage | ILoading
