import React from 'react';
import s from './Button.module.css';

type ButtonType = {
    name: string
    callBack: () => void
    isDisabled: boolean
    className?: string
}

export const Button = ({callBack, name, isDisabled, className}: ButtonType) => {

    return (
        <button
            className={`${s.button} ${className}`}
            onClick={callBack}
            disabled={isDisabled}
        >
            {name}
        </button>
    );
};