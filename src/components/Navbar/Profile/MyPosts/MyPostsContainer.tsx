import React, {RefObject} from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StateType, StoreType} from '../../../redux/store';
import {AppReduxStateType, RootStore} from '../../../redux/redux-store';
import StoreContext from '../../../../StoreContext';


// type MyPostsContainerPropsType = {
//     store: RootStore
// }


export const MyPostsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let state: AppReduxStateType = store!.getState()

            const onAddPost = (newPostElement: RefObject<HTMLTextAreaElement>) => {
                const text = newPostElement.current?.value
                if (text) {
                    store!.dispatch(addPostAC(text))
                }
            }

            function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
                store!.dispatch(updateNewPostTextAC(e.currentTarget.value))
            }

            return <MyPosts onAddPost={onAddPost} onChangeHandler={onChangeHandler} profilePage={state.profileReducer}/>
        }}
    </StoreContext.Consumer>

}