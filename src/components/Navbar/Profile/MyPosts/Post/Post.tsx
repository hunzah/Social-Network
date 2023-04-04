import React from 'react';

// @ts-ignore
import s from './Post.module.css'

type PostType = {
    message:string,
    count: number
}

export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            post 1
            <div>
                {props.message}
                <span>like </span> {props.count}
            </div>


        </div>
    )
}
