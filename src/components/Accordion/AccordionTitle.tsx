import React from 'react';

type PropsType = {
    title: string
    callback: () => void
}

export const AccordionTitle = ({title, callback}: PropsType) => <h3 onClick={callback}>{title}</h3>
