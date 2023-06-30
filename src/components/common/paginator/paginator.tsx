import s from './paginator.module.css';
import React, { useState } from 'react';

type PropsType = {
    onPageChanged: (p: number) => void;
    totalItemsCount: number;
    pageSize: number;
    currentPage: number;
    portionSize?: number;
};

export const Paginator = (props: PropsType) => {
    const {
        onPageChanged,
        totalItemsCount,
        pageSize,
        currentPage,
        portionSize = 10,
    } = props;


    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    const portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState<number>(1);

    const leftPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPageNumber = Math.min(portionNumber * portionSize, pagesCount);

    const prevDisabled = portionNumber === 1;

    const nextDisabled = portionNumber === portionCount;

    return (
        <div>
            <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={prevDisabled}>
                prev
            </button>


            {pages
                .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
                .map((p) => (
                    <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            const portionNumber = Math.ceil(p / portionSize);
                            setPortionNumber(portionNumber);
                            onPageChanged(p);
                        }}
                    >
            {p}
          </span>
                ))}

            <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={nextDisabled}>
                next
            </button>
        </div>
    );
};