import {Meta} from '@storybook/react';
import {Component} from './Component';
import {useCallback, useMemo, useState} from 'react';
import {Count} from './Count';

const meta: Meta<typeof Component> = {
    component: Component
}

export default meta


export const DefaultUseMemo = () => {
    console.log('DefaultUseMemo')

    const [count, setCount] = useState<number>(0)
    const [num, setNum] = useState<number>(0)

    const onClickHandlerMemo = useMemo(() => {
        return () => setCount(count + 1)
    }, [count])

    const useMemoFoo = useMemo(() => {
        return () => {
            setNum(num + 1)
        }
    }, [num])

    return (
        <div>
            <div>
                <div>{count}</div>
                <Count callback={onClickHandlerMemo}/>
            </div>
            <Component callback={useMemoFoo}/>
            <div>{num}</div>
        </div>
    )
}
export const DefaultUseCallback = () => {
    console.log('DefaultUseCallback')

    const [count, setCount] = useState<number>(0)
    const [num, setNum] = useState<number>(0)

    const onClickHandlerCallback = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const useCallbackFoo = useCallback(() => {
        setNum(num + 1)
    }, [num])

    return (
        <div>
            <div>
                <div>{count}</div>
                <Count callback={onClickHandlerCallback}/>
            </div>
            <Component callback={useCallbackFoo}/>
            <div>{num}</div>
        </div>
    )
}