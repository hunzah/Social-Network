import React from 'react';
import {UsersArrType} from '../redux/users-reducer';

type UsersPropsType = {
    users: UsersArrType[]
    followHandler: (userId: number) => void
    UnFollowHandler: (userId: number) => void
    SetUsers: (users: UsersArrType) => void
}
export const Users = (props: UsersPropsType) => {
    const {users, followHandler, UnFollowHandler, SetUsers} = props
    return (
        <div>
            {users.map(u => {
                    return (
                        <div key={u.id}>
                            <img src={u.avatar}/>
                            <div>{u.avatar}</div>
                            <div>{u.name}</div>
                            <button onClick={() => UnFollowHandler(u.id)}>{u.followed ? 'unfollow' : 'unfollow'}</button>
                            <div>{u.city}</div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

