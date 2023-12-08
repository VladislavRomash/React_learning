import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [onOff, setOnOff] = useState<boolean>(false)

    const on = () => {
        setOnOff(true)
    }
    const off = () => {
        setOnOff(false)
    }

    const styleOff = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: onOff ? '' : 'red'
    }
    const styleOn = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: onOff ? 'green' : ''
    }
    const styleIndicate = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: onOff ? 'green' : 'red'
    }

    return (
        <div>
            <div style={styleOff}
                 onClick={off}>off
            </div>
            <div style={styleOn}
                 onClick={on}>on
            </div>
            <div style={styleIndicate}>ind</div>
        </div>
    );
};
