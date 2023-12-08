import React from 'react';
import {Star} from './Star';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingType
    callback: (value: RatingType) => void
}

export const Rating = ({value, callback}: RatingPropsType) => {

    return (
        <div>
            <Star selected={value > 0} callback={() => callback(1)}/>
            <Star selected={value > 1} callback={() => callback(2)}/>
            <Star selected={value > 2} callback={() => callback(3)}/>
            <Star selected={value > 3} callback={() => callback(4)}/>
            <Star selected={value > 4} callback={() => callback(5)}/>
        </div>
    );
};

