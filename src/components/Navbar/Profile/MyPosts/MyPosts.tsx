import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsArrType} from '../../../redux/state';


type MyPostsPropsType = {
    postsArr: PostsArrType[]
    addPost: (text: any) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.postsArr.map(item => <Post message={item.message} count={item.count}/>)


    const newPostElement: any = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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