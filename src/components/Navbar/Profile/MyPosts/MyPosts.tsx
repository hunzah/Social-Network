import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/store';


type MyPostsPropsType = {
    onAddPost: (newPostElement: React.RefObject<HTMLTextAreaElement>) => void
    onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    profilePage: ProfilePageType
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.profilePage.postsArr.map(item => <Post key={item.id} message={item.message}
                                                                      count={item.count}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const handleAddPost = () => {
        props.onAddPost(newPostElement)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(event)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea
                        value={props.profilePage.newPostText}
                        onChange={handleChange}
                        ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={handleAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}