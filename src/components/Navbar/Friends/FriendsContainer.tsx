import React from 'react';
import {StoreType} from '../../redux/store';
import s from './Friend.module.css'

type FriendsPropsType = {
    store: StoreType
}


const FriendsContainer = (props: FriendsPropsType) => {
    let state = props.store.getState()
    return (
        <ul>
            {state.friendsPage.Friends.map(item => {
                return (<li className={s.items} key={item.id}>
                        <img className={s.img} src={item.avatar} alt="avatars"/>
                        <li className={s.items}>
                            {item.name}
                        </li>
                    </li>
                )
            })}
        </ul>
    );
};

export default FriendsContainer