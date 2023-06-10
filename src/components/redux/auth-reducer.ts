import {ActionTypes} from './redux-store';

export type ResponseDataType = {
    resultCode: number,
    messages: string[],
    data: DataType
}
export type DataType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean, // add isAuth here
}

const initialState = {
    resultCode: 0,
    messages: [],
    data:
        {
            userId: null,
            email: null,
            login: null,
            isAuth: false,
        }
}

export const authReducer = (state: ResponseDataType = initialState, action: ActionTypes): ResponseDataType => {
    switch (action.type) {
        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data,
                data: {
                    ...action.data,
                    isAuth: true,
                },
            };
    }
    return state;
};

export const SetUserDataAC = (data: DataType) => ({type: 'SET-USERS-DATA', data: data} as const);




