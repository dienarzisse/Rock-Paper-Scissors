import './styling/css/Rules.css';
import RulesImage from '../images/image-rules-bonus.svg';
import CloseIcon from '../images/icon-close.svg';

function Rules({Visibility,setRulesVisibility }){
    const handleClick = () =>{
        setRulesVisibility(false);
    }
    return(
        <div className="Rules" style={ {"display": `${Visibility ? "flex":"none"}`} }>
            <h1>Rules</h1>
            <img src={ RulesImage } alt="rules"></img>
            <a href="https://www.youtube.com/watch?v=iSHPVCBsnLw">The Master himself explaining 😉</a>
            <button onClick={ handleClick }>
                <img src={ CloseIcon } alt="close"></img>
            </button>
        </div>
    );
}

export default Rules;