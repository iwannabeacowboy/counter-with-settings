import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {CountDisplay} from './CountDisplay/CountDisplay';
import {Setting} from './Setting';
import s from './Counter.module.css'

export type StatusType = 'counter' | 'setting' | 'error'

export const Counter = () => {

    const [startCount, setStartCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [count, setCount] = useState<number>(startCount);
    const [status, setStatus] = useState<StatusType>('counter')

    useEffect(() => {
        const startCountStr = localStorage.getItem('startCount')
        if (startCountStr) {
            setStartCount(JSON.parse(startCountStr))
            setCount(JSON.parse(startCountStr))
        }
        const maxCountStr = localStorage.getItem('maxCount')
        maxCountStr && setMaxCount(JSON.parse(maxCountStr))
    }, [])

    const increment = () => {
        if (count < maxCount) setCount(count + 1);
    };

    const reset = () => {
        setCount(startCount);
    };

    return (
        <>
            <Setting
                startCount={startCount}
                maxCount={maxCount}
                status={status}
                setStatus={setStatus}
                setCount={setCount}
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
            />

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
        </>
    );
};