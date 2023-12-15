import {Meta} from '@storybook/react';
import {UseMemoHookComponent} from './UseMemoHookComponent';
import {UsersMemo} from './UsersMemo';
import {useMemo, useState} from 'react';
import {Counter} from './Counter';

const meta: Meta<typeof UseMemoHookComponent> = {
    component: UseMemoHookComponent
}
export default meta

export const DifficultCounting = () => <UseMemoHookComponent/>

export type UsersOfMemoType = {
    id: number
    name: string
}

const students: UsersOfMemoType[] = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Nick'},
    {id: 5, name: 'Victor'},
]

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo component')

    const [count, setCount] = useState<number>(0)
    const [users, setUsers,] = useState(students)

    const filteredUsers = useMemo(() => {
        return users.filter(f => f.name.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser: UsersOfMemoType = {id: users.length + 1, name: 'Igar'}
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <Counter count={count} setCount={setCount}/>
            <UsersMemo users={filteredUsers}/>
            <div>
                <button onClick={addUser}>add user</button>
            </div>
        </div>
    )
}

