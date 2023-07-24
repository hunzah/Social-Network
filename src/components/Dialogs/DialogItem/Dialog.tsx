// @ts-ignore
import s from '../Dialogs.module.scss'

import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    path: string
    name: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}><NavLink to={`/Dialogs}`}>{props.name}</NavLink></div>
    )
}



