import React, {RefObject} from 'react';
import {addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {DispatchType} from '../../../redux/store';
import {connect} from 'react-redux';


// type MyPostsContainerPropsType = {
//     store: RootStore
// }
// export const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state: AppReduxStateType = store!.getState()
//
//             const onAddPost = (newPostElement: RefObject<HTMLTextAreaElement>) => {
//                 const text = newPostElement.current?.value
//                 if (text) {
//                     store!.dispatch(addPostAC(text))
//                 }
//             }
//
//             function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
//                 store!.dispatch(updateNewPostTextAC(e.currentTarget.value))
//             }
//
//             return <MyPosts onAddPost={onAddPost} onChangeHandler={onChangeHandler} profilePage={state.profileReducer}/>
//         }}
//     </StoreContext.Consumer>
// }

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