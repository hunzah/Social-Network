import React from 'react';
import s from './Friend.module.css'
import {RootStore} from '../../redux/redux-store';

type FriendsPropsType = {
    store: RootStore
}


export const Friends = (props:FriendsPropsType) => {
    return (
        <ul >
            {props.store.getState().friendsReducer.Friends.map(item => {
                return (<li className={s.items}  key={item.id}>
                            <img className={s.img} src={item.avatar} alt='avatars'/>
                        <li className={s.items} >
                            {item.name}
                        </li>
                    </li>
                )
            })}
        </ul>
    );
};

