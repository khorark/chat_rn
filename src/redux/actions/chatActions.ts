/**
 * Created by arkadiy on 06.09.18.
 */
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from 'redux'
import { ISendMessagePayload, ILoading, IRemoveMessagePayload } from '../../types/actions'

export enum Type {
    GET_MESSAGES = '@@chat/GET_MESSAGES',
    SEND_MESSAGE = '@@chat/SEND_MESSAGE',
    REMOVE_MESSAGE = '@@chat/REMOVE_MESSAGE',
    IS_LOADING = '@@chat/IS_LOADING',
}

export const getMessages = () => (dispatch: Dispatch) => {
    dispatch(changeLoadingStatus(true))
    setTimeout(() => {
        dispatch(changeLoadingStatus(false))
        dispatch({
            payload: {},
            type: Type.GET_MESSAGES,
        })
    }, 1000)
}

export const sendMessage = ({ message }: ISendMessagePayload) => (dispatch: Dispatch) => {
    dispatch(changeLoadingStatus(true))
    setTimeout(() => {
        dispatch(changeLoadingStatus(false))
        dispatch({
            message,
            type: Type.SEND_MESSAGE,
        })
    }, 1000)
}

export const removeMessage = ({ id }: IRemoveMessagePayload) => (dispatch: Dispatch) => {
    dispatch(changeLoadingStatus(true))
    setTimeout(() => {
        dispatch(changeLoadingStatus(false))
        dispatch({
            id,
            type: Type.REMOVE_MESSAGE,
        })
    }, 1000)
}

export const changeLoadingStatus: ActionCreator<ILoading> = (isLoading: boolean) => ({
    type: Type.IS_LOADING,
    isLoading,
})

export const Actions: ActionCreatorsMapObject = {
    getMessages,
    sendMessage,
    removeMessage,
    changeLoadingStatus,
}
