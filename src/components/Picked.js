import './styling/css/Picked.css';

import Shape from './Shape';
import { useContext, useEffect } from 'react';
import { ChoiceContext } from './ChoiceContext';

function Picked(){
    const {Choice, House, setHouse} = useContext(ChoiceContext);
    useEffect(function(){
        const items = ["paper", "rock", "scissors", "lizard", "spock"];
        setTimeout(function () {
            setHouse(items[Math.floor(Math.random() * items.length)]);
        }, 3000);
    },[Choice]);
    return(
        <div className="Picked">
            <div className="you-picked">
                <div className="picked-icon">
                    <Shape shape={ `${ Choice }` }></Shape>
                </div>
                <span>You Picked</span>
            </div>

            <div className="house-picked">
                <div className="picked-icon">
                    <Shape shape={ `${ House }` }></Shape>
                </div>
                {!House && <span>The House is picking...</span>}
                {House && <span>The House picked</span>}
            </div>
        </div>
    );
}

export default Picked;