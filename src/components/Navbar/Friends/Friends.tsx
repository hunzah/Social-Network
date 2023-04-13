import React from 'react';
import {FriendsArrType} from '../../redux/state';
import s from './Friend.module.css'

type FriendsPropsType = {
    Friends: FriendsArrType[]
}


export  const Friends = (props:FriendsPropsType, index:number) => {
    return (
        <div>
            {props.Friends.map(item => {
                return (<div key={index}>
                            <img className={s.img} src={item.avatar}/>
                        <div>
                            {item.name}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

