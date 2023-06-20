import {ActionTypes, DispatchType} from './redux-store';
import {authUserThunk} from './auth-reducer';

export type StateType = {
    initialized: boolean
}

const initialState: StateType = {
    initialized: false
}

const appReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type){
        case 'INITIALIZED-SUCCESS':
            return {...state, initialized: true}
    }
    return state
};

export const InitializedSuccessAC =()=> {
    return ({
        type:'SET-INITIALIZED'
    })
}
export const InitializeThunk =()=>(dispatch:DispatchType)=> {
// @ts-ignore
    Promise.all([dispatch(authUserThunk())]).then(()=>{
        dispatch(InitializedSuccessAC())
    })

}

export default appReducer;
