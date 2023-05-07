import React from 'react';
import {FriendsArrType} from '../../redux/store';
import s from './Friend.module.css'

type FriendsPropsType = {
    Friends: FriendsArrType[]
}


export  const Friends = (props:FriendsPropsType) => {
    return (
        <ul >
            {props.Friends.map(item => {
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

