import { AnyAction } from 'redux';
import { ChatActions } from '../types/actions'
import { IReduxState } from '../types/reducer'
import { Type } from './actions'

export const initialState: IReduxState = {
    messages: [],
    isLoading: false,
}

const reducer = (state = initialState, action: ChatActions) => {
    if (!state) { return state; }

    let messages
    switch (action.type) {
        case Type.ADD_MESSAGE:
            messages = [...state.messages]
            messages.push(action.message)
            return { ...state, messages }
        case Type.REMOVE_MESSAGE:
            messages = [...state.messages].filter(({ id }) => id !== action.id)
            return { ...state, messages }
        case Type.IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export default reducer
