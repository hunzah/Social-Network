import {MessageSendAC, messagesReducer} from './messages-reducer';

test('LoadingAC should be set', () => {


    const state = {
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

    const action = MessageSendAC('new message was added')
    const result = messagesReducer(state, action)
    expect(result.messageArr[2].message).toBe('new message was added')

})
