import React, {useState} from 'react';
import {RatingType} from './Rating';
import {Star} from './Star';

export const UncontrolledRating = () => {

    const [num, setNum] = useState<RatingType>(0)

    const onClickHandler = (num: RatingType) => {
        setNum(num)
    }

    return (
        <div>
            <Star selected={num > 0} callback={() => onClickHandler(1)}/>
            <Star selected={num > 1} callback={() => onClickHandler(2)}/>
            <Star selected={num > 2} callback={() => onClickHandler(3)}/>
            <Star selected={num > 3} callback={() => onClickHandler(4)}/>
            <Star selected={num > 4} callback={() => onClickHandler(5)}/>
        </div>
    );
};