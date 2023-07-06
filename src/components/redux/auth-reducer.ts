import {ActionTypes, DispatchType} from './redux-store';
import {authApi} from '../../api/api';
import {stopSubmit} from 'redux-form';


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
        case 'auth/SET-USERS-DATA':
            return {
                ...state,
                ...action.payload, isAuth: action.payload.isAuth
            };
        case 'auth/SET-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };

    }
    return state;
};


export const SetUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET-USERS-DATA',
    payload: {id, email, login, isAuth}
} as const);

export const SetLoadingAC = (isLoading: boolean) => ({
    type: 'auth/SET-LOADING',
    isLoading
} as const);


export const authUserThunk = () => async (dispatch: DispatchType) => {
    let response = await authApi.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(SetUserDataAC(id, email, login, true));
        dispatch(SetLoadingAC(false))
    }
};

export const logInUserThunk = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: any) => {
        let response = await authApi.logIn(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(authUserThunk())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : 'something went wrong '
            dispatch(stopSubmit('login', {_error: message}))
        }


    };

export const logOutUserThunk = () =>
    async (dispatch: DispatchType) => {
        let response = await authApi.logOut()
        if (response.data.resultCode === 0) {
            let {id, email, login} = {id: null, email: null, login: null};
            dispatch(SetUserDataAC(id, email, login, false))
        }
    };