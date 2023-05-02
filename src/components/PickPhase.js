import './styling/css/PickPhase.css';
// Icon imports
import PentagonIcon from '../images/bg-pentagon.svg';

import Shape from './Shape';
import { useContext } from 'react';
import { ChoiceContext } from './ChoiceContext';

function PickPhase(){
    const {setChoice } = useContext(ChoiceContext);
    const handleClick = (event) =>{
        setChoice(event.target.className.slice(6));
    }
    return(
        <div className="PickPhase" style={{
            backgroundImage: `url(${ PentagonIcon })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="Icons" onClick={ event => handleClick(event) }>
                <Shape shape="scissors" />
                <Shape shape="rock" />
                <Shape shape="paper" />
                <Shape shape="lizard" />
                <Shape shape="spock" />
            </div>
        </div>
    );
}

export default PickPhase;