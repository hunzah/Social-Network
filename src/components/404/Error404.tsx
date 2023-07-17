import React from 'react';
import error404 from '../../assets/img/404.png'
import s from './Error.module.css'

export const Error404 = () => {
    return (
        <div className={s.errorImg} style={{display: 'flex'}}>
            <img src={error404}/>
        </div>
    );
};

