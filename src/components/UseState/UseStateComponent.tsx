import React, {FC} from 'react';

type PropsType = {
    count: number
    callback: () => void
}

export const UseStateComponent: FC<PropsType> = ({count, callback}) => {

    return (
        <div>
            <button onClick={callback}>+</button>
            {count}
        </div>
    );
};