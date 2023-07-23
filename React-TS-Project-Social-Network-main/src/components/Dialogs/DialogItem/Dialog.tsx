import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    path: string
    name: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}><NavLink to={`/dialog${props.path}`}>{props.name}</NavLink></div>
    )
}



