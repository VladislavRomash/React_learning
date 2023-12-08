import {Meta, StoryObj} from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

const meta: Meta<typeof OnOff> = {
    component: OnOff
}
export default meta

type Story = StoryObj<typeof OnOff>
export const ControlOnOff: Story = {
    args: {
        switcher: true,
        callback: action('click')
    }
}

export const On = () => <OnOff switcher={true} callback={action('click')}/>
export const Off = () => <OnOff switcher={false} callback={action('click')}/>

export const OnOffChanging = () => {
    const [value, setValue] = useState(true)
    const onClickHandler = (value: string) => {
        switch (value) {
            case 'off':
                return setValue(false)
            case 'on':
                return setValue(true)
        }
    }
    return (
        <OnOff switcher={value} callback={onClickHandler}/>
    )
}