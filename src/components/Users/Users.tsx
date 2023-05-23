import React from 'react';
import s from './users.module.css'
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';


type UsersPropsType = MapStateType & MapDispatchType

export const Users = (props: UsersPropsType) => {
    const {users, followHandler, UnFollowHandler, SetUsers} = props


    if (users.length === 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
            SetUsers(response.data))
    }
    return (
        <div>
            {users.map(u => {
                    return (
                        <div key={u.id}>
                            <img src={u.avatar} className={s.avatar}/>
                            {u.followed ? <button onClick={() => followHandler(u.id)}>follow</button> :
                                <button onClick={() => UnFollowHandler(u.id)}>unfollow</button>}
                            <div>{u.avatar}</div>
                            <div>{u.name}</div>

                            <div>{u.city}</div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

