import React from 'react';

type PropsType = {
    selected: boolean
    callback: () => void
}
export const Star = ({selected, callback}: PropsType) => {
    return <span onClick={callback}>
         {
             selected
                 ? <b>star </b>
                 : 'star '
         }
    </span>

}