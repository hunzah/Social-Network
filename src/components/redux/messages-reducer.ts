import {ActionTypes, MessagesPageType} from './store';

const initialState = {
    dialogsArr: [
        {path: '1', name: 'Curtis James'},
        {path: '2', name: 'John Carter'},
        {path: '3', name: 'Andre Lauren'},
        {path: '4', name: 'Christopher George'},
    ],
        messageArr: [
        {message: 'Hi!'},
        {message: 'my name is Curtis James!'},

    ],
        newMessageBody: '',
}

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {
    // console.log(state)

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

