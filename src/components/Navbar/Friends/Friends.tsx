import React from 'react';
import s from './Friend.module.css'
import StoreContext from '../../../StoreContext';

// type FriendsPropsType = {
//     store: RootStore
// }


export const Friends = () => {
        return <StoreContext.Consumer>
            {(store) => {

                return (
                    <ul>
                        {store!.getState().friendsReducer.Friends.map(item => {
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
            }}
        </StoreContext.Consumer>

};

