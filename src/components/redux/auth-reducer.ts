import {ActionTypes} from './redux-store';

export type ResponseDataType = {
    resultCode: number,
    messages: string[],
    data: DataType
}
export type DataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth?: boolean, // add isAuth here
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: DataType = initialState, action: ActionTypes): DataType => {
    switch (action.type) {

        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data, isAuth:true
            };
    }
    return state;
};

export const SetUserDataAC = (id: string | null, email: string | null, login: string | null) => ({
    type: 'SET-USERS-DATA',
    data: {id, email, login}
} as const);




