import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {addPostAC, DispatchType, ProfilePageType, updateNewPostTextAC} from '../../../redux/state';


type MyPostsPropsType = {
    profilePage:ProfilePageType
    dispatch: DispatchType
}



export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.profilePage.postsArr.map(item => <Post key ={item.id} message={item.message} count={item.count}/>)
    const newPostElement:  React.RefObject<HTMLTextAreaElement>  = React.createRef()



    const addPost = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.dispatch(addPostAC(text))
        }
    }

    function onChangeHandler() {
        const newText = newPostElement.current?.value
        if (newText) {
            props.dispatch(updateNewPostTextAC(newText))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea
                        value={props.profilePage.newPostText}
                        onChange={onChangeHandler}
                        ref={newPostElement} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}