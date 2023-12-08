import React from 'react';

type PropsType = {
    title: number
}

export const OneComponent: React.FC<PropsType> = React.memo(({title}) => {
    console.log('One Component')
    return <span style={{margin: '8px'}}>{title}</span>
});