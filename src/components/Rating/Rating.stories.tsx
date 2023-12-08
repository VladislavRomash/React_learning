import {Meta, StoryObj} from '@storybook/react';
import {Rating, RatingType} from './Rating';
import {action} from '@storybook/addon-actions'
import {useState} from 'react';

const meta: Meta<typeof Rating> = {
    component: Rating
}
export default meta;

type Story = StoryObj<typeof Rating>

export const ControlsRating: Story = {
    args: {
        value: 1,
        callback: action('click on')
    }
}

export const EmptyStar = () => <Rating value={0} callback={action('click on')}/>
export const OneStar = () => <Rating value={1} callback={action('click on')}/>
export const TwoStar = () => <Rating value={2} callback={action('click on')}/>
export const ThreeStar = () => <Rating value={3} callback={action('click on')}/>
export const FourStar = () => <Rating value={4} callback={action('click on')}/>
export const FiveStar = () => <Rating value={5} callback={action('click on')}/>

export const RatingChanging = () => {
    const [value, setValue] = useState<RatingType>(0)
    const onClickHandler = (currentValue: RatingType) => {
        setValue(currentValue)
    }
    return (
        <Rating value={value} callback={onClickHandler}/>
    )
}

