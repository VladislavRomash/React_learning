import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};
export default meta;

export type DataType = {
    first: { title: string, names: NamesType[] }
    second: { title: string, names: NamesType[] }
    third: { title: string, names: NamesType[] }
}

export type NamesType = {
    id: number
    name: string
}

const data = {
    first: {
        title: 'Collapsed Accordion',
        names: []
    },
    second: {
        title: 'Opened Accordion',
        names: [
            {id: 1, name: 'Ann'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Alex'},
        ]
    },
    third: {
        title: 'Names',
        names: [
            {id: 1, name: 'Ann'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Alex'},
        ]
    },
}

type Story = StoryObj<typeof Accordion>
export const ControlsAccordion: Story = {
    args: {
        title: 'Users',
        data: [
            {id: 1, name: 'Ann'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Alex'},
        ],
        collapsed: true,
        callback: action('click'),
        clickHandlerLi: action('click')
    },
};

export const CollapsedAccordion = () => <Accordion title={data.first.title}
                                                   data={data.first.names}
                                                   collapsed={true}
                                                   callback={action('click')}
                                                   clickHandlerLi={action('click')}/>

export const OpenedAccordion = () => <Accordion title={data.second.title}
                                                data={data.second.names}
                                                collapsed={false}
                                                callback={action('click')}
                                                clickHandlerLi={action('click')}/>

export const AccordionChanging = () => {
    const [condition, setCondition] = useState<boolean>(true)
    const [selection, setSelection] = useState<DataType>(data)
    const onClickHandler = () => {
        setCondition(!condition)
    }
    const clickHandlerLi = (title: string) => {
        setSelection({...selection, third: {...selection.third, title}})
        setCondition(true)
    }

    return (
        <Accordion title={selection.third.title}
                   data={selection.third.names}
                   collapsed={condition}
                   callback={onClickHandler}
                   clickHandlerLi={clickHandlerLi}/>
    )
}