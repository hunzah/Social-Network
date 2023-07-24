import React from 'react';
import error404 from '../../assets/img/404.png'
import s from './Error.module.css'

export const Error404 = () => {
    return (
        <div className={s.errorImg} style={{display: 'flex'}}>
            <img alt={'404'} src={error404}/>
            <h1>Page not found 😧</h1>
        </div>
    );
};

