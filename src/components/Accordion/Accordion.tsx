import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';
import {NamesType} from './Accordion.stories';

type PropsType = {
    title: string
    data: NamesType[]
    collapsed: boolean
    callback: () => void
    clickHandlerLi: (title: string) => void
}

export const Accordion = ({title, data, collapsed, callback, clickHandlerLi}: PropsType) => {
    return (
        <div>
            <AccordionTitle title={title} callback={callback}/>
            {!collapsed && <AccordionBody data={data} callback={clickHandlerLi}/>}
        </div>

    );
};





