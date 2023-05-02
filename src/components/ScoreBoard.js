import './styling/css/ScoreBoard.css'
import Bonus from '../images/logo-bonus.svg';
function ScoreBoard({Score}){
    return(
        <div className="ScoreBoard">
            <img src={ Bonus } alt="bonus"></img>
            <div className="Score">
                <div>Score</div>
                <span>{ Score }</span>
            </div>
        </div>
    );
}

export default ScoreBoard;
