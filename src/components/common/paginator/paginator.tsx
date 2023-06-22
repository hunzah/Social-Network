import s from './paginator.module.css';
import React from 'react';

type PropsType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator = (props: PropsType) => {
    const {onPageChanged, totalUsersCount, pageSize, currentPage} = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p =>
            <span key={p} className={currentPage === p ? s.selectedPage : ''}
                  onClick={() => onPageChanged(p)}>
                        {p}
                    </span>)}
    </div>
}
