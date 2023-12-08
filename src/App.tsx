import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';

function App() {

    const [onOff, setOnOff] = useState<boolean>(true)
    const changeStatus = (value: string) => {
        switch (value) {
            case 'off':
                return setOnOff(false)
            case 'on':
                return setOnOff(true)
        }
    }

    const [rating, setRating] = useState<RatingType>(0)
    const onClickHandlerStar = (value: RatingType) => setRating(value)

    const [conditionAccordion, setConditionAccordion] = useState<boolean>(true)
    const changeConditionAccordion = () => setConditionAccordion(!conditionAccordion)


    return (
        <div style={{padding: '20px', border: '1px solid black'}}>

            <PageTitle title={'This is App component'}/>

            <h3>Controlled</h3>

            <Rating value={rating}
                    callback={onClickHandlerStar}/>

            <Accordion title={'Browsers'}
                       data={['Yandex', 'Chrome']}
                       collapsed={conditionAccordion}
                       callback={changeConditionAccordion}/>

            <OnOff switcher={onOff}
                   callback={changeStatus}/>

            <hr/>
            <h3>Uncontrolled</h3>

            <UncontrolledRating/>
            <UncontrolledAccordion/>
            <UncontrolledOnOff/>


        </div>
    );

}

const PageTitle = (props: { title: string }) => {
    return <h1>{props.title}</h1>
}

export default App;