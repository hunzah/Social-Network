import {ActionTypes, MessagesPageType} from './state';


const messagesReducer = (state:MessagesPageType, action:ActionTypes) => {
    if (action.type === 'NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body

    } else if (action.type === 'MESSAGE-SEND') {

        const body = state.newMessageBody
        state.newMessageBody = ''
        state.messageArr.unshift({message: body})

    }
    return state

};

export default messagesReducer
