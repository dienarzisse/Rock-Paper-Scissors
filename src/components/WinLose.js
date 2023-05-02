import { useContext, useEffect } from 'react';
import { ChoiceContext } from './ChoiceContext';
import './styling/css/WinLose.css';

function WinLose(){
    const {Choice, House, setChoice, setHouse, Score, setScore} = useContext(ChoiceContext);
    
    const Winning = (Choice, House) => {
        let win = 1;
        if(Choice === House)
            win = -1;
        if(Choice === "rock" && (House === "paper" || House === "spock"))
            win = 0;
        if(Choice === "paper" && (House === "scissors" || House === "lizard"))
            win = 0;
        if(Choice === "scissors" && (House === "spock" || House === "rock"))
            win = 0;
        if(Choice === "spock" && (House === "lizard" || House === "paper"))
            win = 0;
        if(Choice === "lizard" && (House === "rock" || House === "scissors"))
            win = 0;
        switch(win){
            case 1: return "You win";
            case 0: return "You lose";
            default: return "Draw";
        }
    }
    const Result = Winning(Choice.toLowerCase(), House.toLowerCase());
    useEffect(function(){
        if(Result === 'You win')
            {
                setScore(Score + 1);
                const ScoreLocal = JSON.parse(localStorage.getItem('Score'));
                localStorage.setItem('Score', ScoreLocal + 1);
            }
    },[Choice]);
    const handleReset = () => {
        setChoice();
        setHouse();
    }
    return(
        <div className="WinLose">
            <span>
                { Result }
            </span>
            <button onClick={ handleReset }>Play Again</button>
        </div>
    );
}

export default WinLose;