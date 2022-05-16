import React from 'react';
import {Button} from '../Button/Button';
import {NumberInput} from './NumberInput/NumberInput';
import s from '../Counter.module.css';
import {StatusType} from '../../App';

type SettingType = {
    startCount: number
    maxCount: number
    status: StatusType
    setStatus: (status: StatusType) => void
    setCount: (count: number) => void
    setStartCount: (newStart: number) => void
    setMaxCount: (newMax: number) => void
}

export const Setting = ({
                            startCount,
                            maxCount,
                            status,
                            setStatus,
                            setCount,
                            setStartCount,
                            setMaxCount
                        }: SettingType) => {

    const changeStartCount = (newStart: number) => {
        setStartCount(newStart)
        status !== 'setting' && setStatus('setting')
    }

    const changeMaxCount = (newMax: number) => {
        setMaxCount(newMax)
        status !== 'setting' && setStatus('setting')
    }

    const onSetClick = () => {
        localStorage.setItem('startCount', JSON.stringify(startCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
        setStatus('counter')
        setCount(startCount)
    }

    return (
        <div className={s.container}>

            <div className={s.inputBlock}>
                <NumberInput
                    name={'max value:'}
                    number={maxCount}
                    setNumber={changeMaxCount}
                    red={status === 'error'}
                />
                <NumberInput
                    name={'start value:'}
                    number={startCount}
                    setNumber={changeStartCount}
                    red={status === 'error'}
                />
            </div>

            <div className={s.buttonsBlock}>
                <Button
                    name={'set'}
                    callBack={onSetClick}
                    isDisabled={status !== 'setting'}
                    className={s.btnWide}
                />
            </div>

        </div>
    );
};