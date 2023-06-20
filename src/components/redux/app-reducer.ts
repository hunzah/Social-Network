import {ActionTypes} from './redux-store';

export type StateType = {
    initialized: boolean
}

const initialState: StateType = {
    initialized: false
}

const profileReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
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

export default profileReducer;
