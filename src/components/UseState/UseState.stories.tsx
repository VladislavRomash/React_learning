import {Meta} from '@storybook/react';
import {UseStateComponent} from './UseStateComponent';
import {useMemo, useState} from 'react';

const meta: Meta<typeof UseStateComponent> = {
    component: UseStateComponent
}

export default meta

const difficultCount = () => {
    console.log('difficultCount')
    // difficult counting ...
    return 3526781096
}

export const WithMemo = () => {

    console.log('WithMemo')

    const initialValue = useMemo(difficultCount, [])

    const [count, setCount] = useState(initialValue)

    const onClickHandler = () => {
        setCount(count + 1)
    }

    return <UseStateComponent count={count}
                              callback={onClickHandler}/>
}

export const UseState = () => {

    console.log('UseState')

    const [count, setCount] = useState(difficultCount)

    const onClickHandler = () => {
        setCount(count + 1)
    }

    return <UseStateComponent count={count}
                              callback={onClickHandler}/>
}

export const SetCountWithChanger = () => {

    const changer = (state: number) => {
        return state + 1
    }

    const [count, setCount] = useState(0)

    const onClickHandler = () => {
        setCount(changer)
    }

    // const onClickHandler = () => {
    //     setCount(state => state + 1)
    // }

    return <UseStateComponent count={count}
                              callback={onClickHandler}/>
}