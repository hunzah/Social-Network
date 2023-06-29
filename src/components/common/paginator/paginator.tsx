import s from './paginator.module.css';
import React, {useState} from 'react';

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

    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber , setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber-1) * portionSize +1
    const rightPortionNumber = portionNumber * portionSize +1

    return <div>
        {pages.map(p =>
            <span key={p} className={currentPage === p ? s.selectedPage : ''}
                  onClick={() => onPageChanged(p)}>
                        {p}
                    </span>)}
    </div>
}
