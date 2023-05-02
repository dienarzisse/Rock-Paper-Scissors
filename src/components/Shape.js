import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Lizard from '../images/icon-lizard.svg';
import Spock from '../images/icon-spock.svg';

import './styling/css/Shape.css';

function Shape(shape){
   
    const map = {Scissors, Rock, Paper, Lizard, Spock}
    const capitalize = shape.shape.charAt(0).toUpperCase() + shape.shape.slice(1);
    return(
        <div className={ `Shape ${ capitalize }`}>
            <img src={ `${map[capitalize]}` } alt="shape"></img>
        </div>
    );
}

export default Shape;