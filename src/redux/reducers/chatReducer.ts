import { ChatActions } from '../../types/actions'
import { IChatState } from '../../types/reducer'
import { Type } from '../actions/chatActions'

export const initialState: IChatState = {
    messages: [],
    isLoading: false,
}

const chatReducer = (state = initialState, action: ChatActions) => {
    if (!state) {
        return state
    }

    let messages
    switch (action.type) {
        case Type.GET_MESSAGES:
            messages = action.payload
            return { ...state, messages }
        case Type.SEND_MESSAGE:
            messages = [...state.messages]
            messages.push(action.message)
            return { ...state, messages }
        case Type.REMOVE_MESSAGE:
            messages = [...state.messages].filter(({ id }) => id !== action.id)
            return { ...state, messages }
        case Type.IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

export default chatReducer
