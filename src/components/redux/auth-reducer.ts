import {ActionTypes} from './redux-store';

export type InitialStateType = {
    resultCode: number,
    messages: string[],
    data: DataType
}
export type DataType = {
    userId: string | null,
    email: string | null,
    login: string | null
}

const initialState = {
    resultCode: 0,
    messages: [],
    data:
        {
            userId: null,
            email: null,
            login: null
        }
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data
            }

    }
    return state

};

export const SetUserDataAC = (data: DataType) => ({type: 'SET-USERS-DATA', data: data} as const)




