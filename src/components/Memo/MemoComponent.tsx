import React from 'react';
import {OneComponent} from './OneComponent';
import {TwoComponent} from './TwoComponent';

type PropsType = {
    one: number
    two: number
}

export const MemoComponent: React.FC<PropsType> = (props) => {
    console.log('___')

    const {one, two} = props

    return (
        <div>
            <OneComponent title={one}/>
            <TwoComponent title={two}/>
        </div>
    );
};