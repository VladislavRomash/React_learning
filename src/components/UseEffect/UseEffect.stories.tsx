import {Meta, StoryFn} from '@storybook/react';
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
        const timeoutID = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 5000)
        return () => {
            clearTimeout(timeoutID)
        }
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

        const intervalID = setInterval(() => {
            console.log('setInterval')
            setCounter((prevState) => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    return (
        <div>
            counter - {counter}
        </div>
    )
}
export const ResetFunctionEffect: StoryFn = () => {
    const [count, setCount] = useState(5)

    console.log('ResetFunctionEffect - ' + count)

    useEffect(() => {
        console.log('useEffect - ' + count)

        return () => {
            console.log('Reset effect - ' + count)
        }
    }, [count]);

    const onClickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button onClick={onClickHandler}>click</button>
        </div>
    )
}
export const PressKey: StoryFn = () => {

    const [key, setKey] = useState('')

    useEffect(() => {
        const callback = (e: KeyboardEvent) => {
            console.log(key)
            setKey(key + e.key)
        }

        window.addEventListener('keypress', callback)

        console.log(key)

        return () => {
            window.removeEventListener('keypress', callback)
        }
    }, [key]);

    return (
        <div>
            Key: {key}
        </div>
    )
}