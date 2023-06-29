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

    // Вычисляем количество страниц
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    // Создаем массив со всеми страницами
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // Вычисляем количество порций страниц
    const portionCount = Math.ceil(pagesCount / portionSize);

    // Определяем состояние текущей порции
    const [portionNumber, setPortionNumber] = useState<number>(1);

    // Вычисляем номера первой и последней страницы в текущей порции
    const leftPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPageNumber = Math.min(portionNumber * portionSize, pagesCount);

    // Определяем, должна ли быть доступна кнопка "prev"
    const prevDisabled = portionNumber === 1;

    // Определяем, должна ли быть доступна кнопка "next"
    const nextDisabled = portionNumber === portionCount;

    return (
        <div>
            <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={prevDisabled}>
                prev
            </button>

            {/* Вычисляем номера первой и последней страницы в порции исходя из выбранной страницы */}
            {pages
                .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
                .map((p) => (
                    <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            // Вычисляем номер порции исходя из выбранной страницы
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