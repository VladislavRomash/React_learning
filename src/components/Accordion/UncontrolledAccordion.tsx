import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';


export const UncontrolledAccordion = () => {

    const [condition, setCondition] = useState<boolean>(true)

    const onClickHandler = () => {
        setCondition(!condition)
    }

    return (
        <div>
            <AccordionTitle title={'Users'} callback={onClickHandler}/>
            {condition && <AccordionBody data={['Ann', 'Kate', 'Nix']}/>}
        </div>
    );
};