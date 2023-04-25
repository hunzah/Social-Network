import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType, updateNewPostText} from '../../../redux/state';


type MyPostsPropsType = {
    profilePage:ProfilePageType
    addPost: (text: string) => void
    updateNewPostText:(newText:string)=>void
}



export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.profilePage.postsArr.map(item => <Post key ={item.id} message={item.message} count={item.count}/>)
    const newPostElement: any = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    function onChangeHandler() {
        let newText = newPostElement.current.value
        updateNewPostText(newText)
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