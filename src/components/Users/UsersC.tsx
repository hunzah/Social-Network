import React from 'react';
import s from './users.module.css'
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';
// @ts-ignore
import defaultPhoto from  './../../assets/img/img.png'

type UsersPropsType = MapStateType & MapDispatchType

class UsersC extends React.Component<UsersPropsType> {

componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
        this.props.setUsers(response.data.items)
    )
}

    render() {
        return (
            <div>
                {this.props.users.map(u => (
                    <div key={u.id}>
                        <img
                            alt={'profile'}
                            src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultPhoto
                            }
                            className={s.avatar}
                        />
                        {u.followed ? (
                            <button onClick={() => this.props.followHandler(u.id)}>
                                follow
                            </button>
                        ) : (
                            <button onClick={() => this.props.unFollowHandler(u.id)}>
                                unfollow
                            </button>
                        )}
                        <div>{u.name}</div>
                        <div>{u.city}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default UsersC