import React, {RefObject} from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StateType, StoreType} from '../../../redux/store';
import {AppReduxStateType, RootStore} from '../../../redux/redux-store';


type MyPostsContainerPropsType = {
    store: RootStore
}


export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state:AppReduxStateType = props.store.getState()

    const onAddPost = (newPostElement:RefObject<HTMLTextAreaElement>) => {
        const text = newPostElement.current?.value
        if (text) {
            props.store.dispatch(addPostAC(text))
        }
    }

    function onChangeHandler(e:React.ChangeEvent<HTMLTextAreaElement>) {
        // const newText = newPostElement.current?.value
        // if (newText) {
        //     props.store.dispatch(updateNewPostTextAC(newText))
            props.store.dispatch(updateNewPostTextAC(e.currentTarget.value))
        }


    return <MyPosts onAddPost={onAddPost} onChangeHandler={onChangeHandler} profilePage={state.profileReducer}/>

}