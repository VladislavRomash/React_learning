import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

            console.log('useEffect')

            const intervalID = setInterval(() => {
                console.log('setInterval')
                setDate(new Date())
            }, 1000);

            return () => {
                clearInterval(intervalID)
            }

        },
        []);

    const digits = (num: number) => num < 10 ? '0' + num : num

    return (
        <div className={s.main}>
            {`${digits(date.getHours())} : ${digits(date.getMinutes())} : ${digits(date.getSeconds())}`}
        </div>
    )
};