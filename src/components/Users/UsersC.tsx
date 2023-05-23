import React from 'react';
import s from './users.module.css'
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';
// @ts-ignore
import defaultPhoto from './../../assets/img/img.png'


type UsersPropsType = MapStateType & MapDispatchType

export const Users = (props: UsersPropsType) => {
    const {users, followHandler, UnFollowHandler, SetUsers} = props

    console.log(defaultPhoto)
    if (users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
            SetUsers(response.data.items)
        )

    }

    return (
        <div>
            {users.map(u => {
                    return (
                        <div key={u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} className={s.avatar}/>
                            {u.followed ? <button onClick={() => followHandler(u.id)}>follow</button> :
                                <button onClick={() => UnFollowHandler(u.id)}>unfollow</button>}
                            <div>{u.name}</div>

                            <div>{u.city}</div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

