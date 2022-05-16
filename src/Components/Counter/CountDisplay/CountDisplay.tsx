import React from 'react';
import s from './CountDisplay.module.css';
import {StatusType} from '../../../App';

type CountDisplayType = {
    count: number
    maxCount: number
    status: StatusType
}

export const CountDisplay = ({count, maxCount, status}: CountDisplayType) => {

    const countClass = `${s.counter} ${count === maxCount && s.red}`
    const settingClass = `${s.counter} ${s.setting}`
    const errorClass = `${s.counter} ${s.setting} ${s.red}`

    return (
        status === 'error' ?
            <div className={errorClass}>
                Invalid setting
            </div> :
            status === 'setting' ?
                <div className={settingClass}>
                    Press set
                </div> :
                <div className={countClass}>
                    {count}
                </div>
    );
};