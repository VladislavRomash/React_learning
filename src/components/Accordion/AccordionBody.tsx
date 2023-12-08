import React from 'react';
import {NamesType} from './Accordion.stories';

type PropsType = {
    data: NamesType[]
    callback: (title: string) => void
}

export const AccordionBody = ({data, callback}: PropsType) => {
    return (
        <>
            <ul>
                {
                    data.map(m => <li key={m.id} onClick={() => callback(m.name)}>{m.name}</li>)
                }
            </ul>
        </>
    );
};