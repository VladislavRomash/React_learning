import React, {FC} from 'react';

type PropsType = {
    callback: () => void
}
export const Count: FC<PropsType> = React.memo(({callback}) => {
        console.log('Count')
        return (
            <div>
                <button onClick={callback}>count</button>
            </div>
        );
    }
)