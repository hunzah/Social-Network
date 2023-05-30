import React from 'react';
import s from './users.module.css'
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';


type UsersPropsType = MapStateType & MapDispatchType

export const Users = (props: UsersPropsType) => {
    const {users, followHandler, unFollowHandler, setUsers} = props

    let getUsers = ()=> {
        if (users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
                setUsers(response.data.items)
            )

        }
    }


    return (
        <div>
            <button onClick={getUsers}/>
            {users.map(u => {
                    return (
                        <div key={u.id}>
                            <img alt={'profile'} src={u.photos.small !== null ? u.photos.small : './../../assets/img/img.png'} className={s.avatar}/>
                            {u.followed ? <button onClick={() => followHandler(u.id)}>follow</button> :
                                <button onClick={() => unFollowHandler(u.id)}>unfollow</button>}
                            <div>{u.name}</div>
                            <div>{u.city}</div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

