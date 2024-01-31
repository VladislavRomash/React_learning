import React, {FC, useEffect} from 'react';

type PropsType = {
    counter: number
    fake: number
    callbackCounter: (num: number) => void
    callbackFake: (num: number) => void
}

export const UseEffectComponent: FC<PropsType> = ({counter, fake, callbackCounter, callbackFake}) => {

    console.log('UseEffectComponent')

    useEffect(() => {
        console.log('without dependencies')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('with empty dependencies')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('with dependencies')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            <div>
                <button onClick={() => callbackCounter(counter + 1)}>counter</button>
                {counter}
            </div>
            <div>
                <button onClick={() => callbackFake(fake + 1)}>fake</button>
                {fake}
            </div>
        </div>
    )
}