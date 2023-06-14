import {ActionTypes, DispatchType} from './redux-store';
import {authApi} from '../../api/api';

export type ResponseDataType<T> = {
    resultCode: number,
    messages: string[],
    data: T
}
export type DataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isLoading: boolean,

}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true
}

export const authReducer = (state: DataType = initialState, action: ActionTypes): DataType => {
    switch (action.type) {

        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data, isAuth: true
            };
        case 'SET-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
    }
    return state;
};


export const setUserDataAC = (id: string | null, email: string | null, login: string | null) => ({
    type: 'SET-USERS-DATA',
    data: {id, email, login}
} as const);
export const setLoadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING',
    isLoading
} as const);


export const authUserThunk = () => {
    return (dispatch: DispatchType) => {

        authApi.me().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserDataAC(id, email, login));
            }
            dispatch(setLoadingAC(false))
        });
    };
};