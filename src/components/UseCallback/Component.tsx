import React, {FC} from 'react';

type PropsType = {
    callback: () => void
}

export const Component: FC<PropsType> = React.memo(({callback}) => {
        console.log('Component')
        return (
            <div>
                <button onClick={callback}>component</button>
            </div>
        );
    }
)