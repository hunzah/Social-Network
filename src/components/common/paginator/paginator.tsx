import s from './paginator.module.css';
import React, {useState} from 'react';

type PropsType = {
    onPageChanged: (p: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize?:number
}

export const Paginator = (props: PropsType) => {
    const {onPageChanged, totalItemsCount, pageSize, currentPage,portionSize = 10} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber , setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber-1) * portionSize +1
    const rightPortionNumber = portionNumber * portionSize +1

    let prevDisable =  portionNumber > 1
    let nextDisable =  portionNumber ===portionCount
    return <div>
            <button
                onClick={()=>setPortionNumber(portionNumber-1)}
             disabled={prevDisable}>prev</button>

        {pages.filter(p=> p> leftPortionNumber && p > leftPortionNumber)
            .map(p =>
            <span key={p} className={currentPage === p ? s.selectedPage : ''}
                  onClick={() => onPageChanged(p)}>
                        {p}
                    </span>)}
        <button
            onClick={()=>setPortionNumber(portionNumber-1)}
            disabled={prevDisable}>next</button>
    </div>
}
