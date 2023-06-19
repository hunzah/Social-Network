import {ActionTypes, DispatchType} from './redux-store';
import {authApi, LogInFormType} from '../../api/api';

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
        // case 'LOG-IN':
        //     return {
        //         ...state,
        //
        //     };
    }
    return state;
};


export const SetUserDataAC = (id: string | null, email: string | null, login: string | null) => ({
    type: 'SET-USERS-DATA',
    data: {id, email, login}
} as const);
export const SetLoadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING',
    isLoading
} as const);
// export const LogInAC = (logInForm: any) => ({
//     type: 'LOG-IN',
//     logInForm:logInForm
// } as const);


export const authUserThunk = () => {
    return (dispatch: DispatchType) => {

        authApi.me().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(SetUserDataAC(id, email, login));
            }
            dispatch(SetLoadingAC(false))
        });
    };
};

export const logInUserThunk = (logInForm: LogInFormType) => {
    return (dispatch: DispatchType) => {
        authApi.loginMe(logInForm).then((data) => {
            if (data.resultCode === 0) {

            }

        });
    };
};