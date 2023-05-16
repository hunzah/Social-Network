import {} from './store';
import {ActionTypes} from './redux-store';

// export type MessageStateType = {
//     messagesPage:MessagesPageType
// }

export type MessagesPageType = {
    dialogsArr: DialogsArrType[]
    messageArr: MessageArrType[]
    newMessageBody: string
}
export type DialogsArrType = {
    path: string
    name: string
}
export type MessageArrType = {
    message: string
}

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

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionTypes): MessagesPageType => {
    // console.log(state)

    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.body};
        case 'MESSAGE-SEND':
            const body = state.newMessageBody
            state.newMessageBody = ''
            return {...state, messageArr: [...state.messageArr,{message: body}]};
        default:
            return state
    }

}

export const messageSendAC = () => ({type: 'MESSAGE-SEND'} as const)
export const newMessageBodyAC = (body: string) => ({type: 'NEW-MESSAGE-BODY', body: body} as const)

