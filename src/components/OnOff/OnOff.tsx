import React from 'react';

type OnOffPropsType = {
    switcher: boolean
    callback: (value: string) => void
}

export const OnOff: React.FC<OnOffPropsType> = ({switcher, callback}) => {

    const styleOff = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: switcher ? '' : 'red'
    }
    const styleOn = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: switcher ? 'green' : ''
    }
    const styleIndicate = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: switcher ? 'green' : 'red'
    }


    return (
        <div>
            <div style={styleOff}
                 onClick={() => callback('off')}>off
            </div>
            <div style={styleOn}
                 onClick={() => callback('on')}>on
            </div>
            <div style={styleIndicate}>ind</div>
        </div>
    );
};