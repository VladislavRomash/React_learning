import {Meta} from '@storybook/react';
import {InputComponent} from './InputComponent';
import {useState, useRef, ChangeEvent} from 'react';

const meta: Meta<typeof InputComponent> = {
    component: InputComponent
}
export default meta


export const DefaultInput = () => <InputComponent/>
export const InputWithFixedValue = () => <InputComponent value={'Hello'}/>
export const TrackValueOfInput = () => {
    const [value, setValue] = useState<string>('')
    return (
        <>
            <InputComponent value={value}
                            callback={setValue}/> - {value}
        </>
    )
}
export const GetValueInputViaRef = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value)

    };
    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>get</button>
            <span> - {value}</span>

        </>
    )
}
export const GetValueInputViaOnChange = () => {
    const [value, setValue] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const recordingValue = (currentValue: string) => {
        setValue(currentValue)
    };
    const handleClick = () => {
        setTitle(value)
    };
    return (
        <>
            <InputComponent value={value} callback={recordingValue}/>
            <button onClick={handleClick}>get</button>
            <span> - {title}</span>
        </>
    )
}
export const InputCheckbox = () => {
    const [value, setValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (
        <>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/> - {`${value}`}
        </>
    )
}
export const InputSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <select value={value} onChange={onChangeHandler}>
                <option value="none">none</option>
                <option value="Minsk">Minsk</option>
                <option value="Kiev">Kiev</option>
                <option value="Mozyr">Mozyr</option>
            </select>
            <span> - {value}</span>
        </>
    )
}