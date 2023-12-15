import React, {FC} from 'react';

type Props = {
    count: number
    setCount: (value: number) => void
}

export const Counter: FC<Props> = React.memo(({count, setCount}) => {
    console.log('Counter component')

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
})