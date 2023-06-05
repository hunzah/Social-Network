
import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
)
}