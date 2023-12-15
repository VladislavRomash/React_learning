import {Meta} from '@storybook/react';
import {MemoComponent} from './MemoComponent';
import {useState} from 'react';

const meta: Meta<typeof MemoComponent> = {
    component: MemoComponent
}
export default meta

export const MemoComponentDemo = () => {

    const [count1, setCount1] = useState<number>(1)
    const [count2, setCount2] = useState<number>(2)

    const incOne = () => {
        setCount1(count1 + 1)
    }
    const incTwo = () => {
        setCount2(count2 + 1)
    }

    return <div>
        <button onClick={incOne}>+</button>
        <button onClick={incTwo}>+</button>
        <MemoComponent one={count1} two={count2}/>
    </div>
}