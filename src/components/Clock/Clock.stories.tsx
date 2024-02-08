import {Meta} from '@storybook/react';
import {Clock} from './Clock';

const meta: Meta<typeof Clock> = {
    component: Clock
}

export default meta


export const DigitalClock = () => <Clock/>