import React from 'react';
import {Button} from '../Button/Button';
import {CountDisplay} from './CountDisplay/CountDisplay';
import s from '../Counter.module.css'
import {StatusType} from '../../App';

type CounterType = {
    count: number
    startCount: number
    maxCount: number
    status: StatusType
    setCount: (count: number) => void
}

export const Counter = ({count, startCount, maxCount, status, setCount}: CounterType) => {

    const increment = () => {
        if (count < maxCount) setCount(count + 1);
    };

    const reset = () => {
        setCount(startCount);
    };

    return (
        <div className={s.container}>

            <CountDisplay
                count={count}
                maxCount={maxCount}
                status={status}
            />

            <div className={s.buttonsBlock}>
                <Button
                    name={'inc'}
                    callBack={increment}
                    isDisabled={count === maxCount || status !== 'counter'}
                />
                <Button
                    name={'reset'}
                    callBack={reset}
                    isDisabled={count === startCount || status !== 'counter'}
                />
            </div>

        </div>
    );
};