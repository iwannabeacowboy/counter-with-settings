import React, {useEffect, useState} from 'react';
import {Setting} from './Components/Setting/Setting';
import {Counter} from './Components/Counter/Counter';
import './App.css'

export type StatusType = 'counter' | 'setting' | 'error'

function App() {

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

    if (startCount >= maxCount || startCount < 0 || maxCount > 999999
        || !Number.isInteger(startCount || maxCount)) {

        status !== 'error' && setStatus('error')
    }

    return (
        <div className="App">

            <Setting
                startCount={startCount}
                maxCount={maxCount}
                status={status}
                setStatus={setStatus}
                setCount={setCount}
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
            />

            <Counter
                count={count}
                startCount={startCount}
                maxCount={maxCount}
                status={status}
                setCount={setCount}
            />

        </div>
    );
}

export default App;
