import React, {RefObject} from 'react';
import {addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {DispatchType} from '../../../redux/redux-store';




type mapStateToPropsType = {
    profilePage:ProfilePageType
}
const mapStateToProps = (state:mapStateToPropsType) => {
    return ({
        profilePage: state.profilePage
    })

}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return ({
        onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextAC(e.currentTarget.value))
        },
        onAddPost: (newPostElement: RefObject<HTMLTextAreaElement>) => {
            const text = newPostElement.current?.value
            if (text) {
                dispatch(addPostAC(text))
            }
        }
    })
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)