import {Meta} from '@storybook/react';
import {UserList} from './UserList';
import {useReducer} from 'react';
import {v1} from 'uuid';

const meta: Meta<typeof UserList> = {
    component: UserList
}
export default meta

export type UsersType = {
    id: string
    name: string
}

const users: UsersType[] = [
    {id: v1(), name: 'Ann'},
    {id: v1(), name: 'Max'},
    {id: v1(), name: 'Igor'},
]

type ActionType = AddType | DeleteType

const reducerUser = (state: UsersType[], action: ActionType): UsersType[] => {
    switch (action.type) {
        case 'ADD':
            let newUser: UsersType = {id: v1(), name: action.name}
            return [newUser, ...state]
        case 'DELETE':
            return state.filter(f => f.id !== action.id)
        default:
            return state
    }
}

type AddType = ReturnType<typeof addUserAC>

const addUserAC = (name: string) => {
    return {
        type: 'ADD', name
    } as const
}

type DeleteType = ReturnType<typeof deleteUserAC>

const deleteUserAC = (id: string) => {
    return {
        type: 'DELETE', id
    } as const
}

const reducerSwitcher = (state: boolean, action: { type: 'SWITCHER' }) => {
    switch (action.type) {
        case 'SWITCHER':
            return !state
        default:
            return state
    }
}

export const UsersList = () => {

    const [data, dispatch] = useReducer(reducerUser, users)
    const [selector, dispatchSelector] = useReducer(reducerSwitcher, false)

    const addUser = (title: string) => dispatch(addUserAC(title))
    const deleteUser = (id: string) => dispatch(deleteUserAC(id))

    return selector
        ? <UserList users={data}
                    onClickCallbackAdd={addUser}
                    onClickCallbackDelete={deleteUser}/>
        : <button onClick={() => dispatchSelector({type: 'SWITCHER'})}>show</button>
}