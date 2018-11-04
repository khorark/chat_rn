import { Action, AnyAction } from 'redux'
import { Type } from '../redux/actions'
import { IMessage } from './reducer'


export interface IAddMessage extends Action {
    type: Type.ADD_MESSAGE
    message: {
        id: number
        author: string,
        text: string,
        date: Date,
    },
}

export interface IRemoveMessage extends Action {
    type: Type.REMOVE_MESSAGE
    id: number,
}

export interface ILoading extends Action {
    type: Type.IS_LOADING,
    isLoading: boolean,
}

export interface IAddMessagePayload {
    message: IMessage,
}

export interface IRemoveMessagePayload {
    id: number,
}

export type ChatActions = IAddMessage | IRemoveMessage | ILoading