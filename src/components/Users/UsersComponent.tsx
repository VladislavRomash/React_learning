import React, {ChangeEvent, useState} from 'react';
import {UsersType} from './Users.stories';

type  PropsType = {
    users: UsersType[]
    onClickCallbackAdd: (title: string) => void
    onClickCallbackDelete: (id: string) => void
}

export const UsersComponent: React.FC<PropsType> = (props) => {

    const {users, onClickCallbackAdd, onClickCallbackDelete} = props

    const [currentValue, setCurrentValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentValue(e.currentTarget.value)
    const onClickHandlerAdd = () => {
        onClickCallbackAdd(currentValue)
        setCurrentValue('')
    }
    const onClickHandlerDelete = (id: string) => onClickCallbackDelete(id)

    return (
        <div>
            <div>
                <input type="text"
                       value={currentValue}
                       onChange={onChangeHandler}/>
                <button onClick={onClickHandlerAdd}>add</button>
            </div>
            <div>
                {
                    users.map(m => {
                        return (
                            <div key={m.id}>
                                <span>{m.name}</span>
                                <button onClick={() => onClickHandlerDelete(m.id)}>delete</button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};