import {ActionTypes} from './redux-store';

export type MessagesPageType = {
    dialogsArr: DialogsArrType[]
    messageArr: MessageArrType[]

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

    ]
}

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionTypes): MessagesPageType => {
    switch (action.type) {
        case 'messages/MESSAGE-SEND':
            const body = action.newMessageBody
            return {...state, messageArr: [...state.messageArr, {message: body}]};
        default:
            return state
    }

}
export const MessageSendAC = (newMessageBody: string) => ({
    type: 'messages/MESSAGE-SEND',
    newMessageBody: newMessageBody
} as const)

