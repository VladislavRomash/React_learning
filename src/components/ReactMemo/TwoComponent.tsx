import React from 'react';

type PropsType = {
    title: number
}

export const TwoComponent: React.FC<PropsType> = React.memo(({title}) => {
    console.log('Two Component')
    return <span style={{margin: '8px'}}>{title}</span>
});
