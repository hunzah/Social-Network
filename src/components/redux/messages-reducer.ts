import {ActionTypes, MessagesPageType} from './store';


const messagesReducer = (state: MessagesPageType, action: ActionTypes) => {

    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'MESSAGE-SEND':
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messageArr.unshift({message: body});
            return state;
        default:
            return state
    }

}


export const messageSendAC = () => ({type: 'MESSAGE-SEND'} as const)
export const newMessageBodyAC = (body: string) => ({type: 'NEW-MESSAGE-BODY', body: body} as const)

export default messagesReducer