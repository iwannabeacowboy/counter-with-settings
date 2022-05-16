import React, {ChangeEvent} from 'react';
import s from './NumberInput.module.css';

type NumberInputType = {
    name: string
    number: number
    setNumber: (number: number) => void
    red: boolean
}

export const NumberInput = ({name, number, setNumber, red}: NumberInputType) => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNumber(e.currentTarget.valueAsNumber)
        }

        const onBlurHandler = () => {
            !number && setNumber(0)
        }

        return (
            <div className={`${s.setter} ${red && s.red}`}>

                    <span>{name}</span>

                    <input
                        type="number"
                        value={number}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

            </div>
        );
    }
;