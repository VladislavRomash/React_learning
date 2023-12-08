import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    value?: string
    callback?: (value: string) => void
}

export const InputComponent: FC<PropsType> = (props) => {

    const {value, callback} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (callback) {
            callback(e.currentTarget.value)
        }
    }

    return (
        <input type="text"
               value={value}
               onChange={onChangeHandler}/>
    );
};