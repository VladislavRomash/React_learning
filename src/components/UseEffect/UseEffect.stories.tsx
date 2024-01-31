import {Meta} from '@storybook/react';
import {UseEffectComponent} from './UseEffectComponent';
import React, {useEffect, useState} from 'react';

const meta: Meta<typeof UseEffectComponent> = {
    component: UseEffectComponent
}

export default meta


export const BasicEffect = () => {
    console.log('BasicEffect')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    return <UseEffectComponent counter={counter}
                               fake={fake}
                               callbackCounter={setCounter}
                               callbackFake={setFake}/>
}
export const SetTimeoutEffect = () => {
    console.log('SetTimeoutEffect')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>counter</button>
                {counter}
            </div>
            <div>
                <button onClick={() => setFake(fake + 1)}>fake</button>
                {fake}
            </div>
        </div>
    )
}
export const SetIntervalEffect = () => {
    console.log('SetIntervalEffect')

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('effect')

        setInterval(() => {
            setCounter((prevState) => prevState + 1)
        }, 1000)

    }, [])

    return (
        <div>
            counter - {counter}
        </div>
    )
}

export const Clock = () => {

    const [hoursData, setHours] = useState(new Date().getHours())
    const [minutesData, setMinutes] = useState(new Date().getMinutes())
    const [secondsData, setSeconds] = useState(new Date().getSeconds())

    useEffect(() => {
        setInterval(() => {
            setHours(prevState => new Date().getHours())
            setMinutes(prevState => new Date().getMinutes())
            setSeconds(prevState => new Date().getSeconds())
        }, 1000)
    }, []);

    return (
        <div>
            {`${hoursData} : ${minutesData} : ${secondsData}`}
        </div>
    )
}