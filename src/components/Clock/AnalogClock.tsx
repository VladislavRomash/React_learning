import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';

export const AnalogClock = () => {

    const [data, setData] = useState(new Date())

    const deg = 6

    const hh = data.getHours() * 30
    const mm = data.getMinutes() * deg
    const ss = data.getSeconds() * deg

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('setInterval')
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div className={s.main}>
            <div className={s.clock}>

                <div className={s.hours}>
                    <div className={s.hr} style={{transform: `rotateZ(${hh + (mm / 12)}deg)`}}>
                    </div>
                </div>

                <div className={s.minutes}>
                    <div className={s.mn} style={{transform: `rotateZ(${mm}deg)`}}>
                    </div>
                </div>

                <div className={s.seconds}>
                    <div className={s.sc} style={{transform: `rotateZ(${ss}deg)`}}>
                    </div>
                </div>

            </div>
        </div>
    )
};