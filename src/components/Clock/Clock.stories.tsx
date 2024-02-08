import {Meta} from '@storybook/react';
import {Clock} from './Clock';
import {AnalogClock} from './AnalogClock';
import {useState} from 'react';

const meta: Meta<typeof Clock> = {
    component: Clock
}

export default meta


export const Digital = () => <Clock/>
export const Analog = () => <AnalogClock/>

export const Change = () => {

    const [changer, setChanger] = useState(true)

    return (
        <>
            <div>
                <button onClick={() => setChanger(!changer)}>CHANGE</button>
            </div>
            {
                changer
                    ? <AnalogClock/>
                    : <Clock/>
            }
        </>
    )
}