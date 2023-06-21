import {ActionTypes, DispatchType} from './redux-store';
import {authUserThunk} from './auth-reducer';

export type StateType = {
    initialized: boolean
}

const initialState: StateType = {
    initialized: false
}

const profileReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS':
            return {...state, initialized: true}
    }
    return state
};

export const InitializedSuccessAC = () => ({
    type: 'app/INITIALIZED-SUCCESS'
}) as const


export const InitializeThunk = () => async (dispatch: DispatchType) => {
    // @ts-ignore
    await Promise.all([dispatch(authUserThunk())])
    await dispatch(InitializedSuccessAC())
}

export default profileReducer;
