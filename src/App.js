import './App.css';
import { useState, useEffect } from 'react';
import { ChoiceContext } from './components/ChoiceContext';
// import components
import ScoreBoard from './components/ScoreBoard';
import Button from './components/Button';
import Rules from './components/Rules';
import PickPhase from './components/PickPhase';
import Picked from './components/Picked';
import WinLose from './components/WinLose';

function App() {
  const [rulesVisible, setRulesVisible] = useState(false);
  const [Score, setScore] = useState(0);
  const [Choice, setChoice] = useState('');
  const [House, setHouse] = useState('');
  const onRulesButtonCLick = () =>{
    setRulesVisible(true);
  }
  useEffect(() =>{
    const ScoreLocal = JSON.parse(localStorage.getItem('Score'));
    if(!ScoreLocal)
      localStorage.setItem('Score', 0);
    else
      setScore(ScoreLocal);
  }, [Score]);

    return (
    <div className="App">
      <ChoiceContext.Provider value={ { Choice, setChoice, House, setHouse, Score, setScore} }>
          <ScoreBoard Score={ Score }/>
          {!Choice && <PickPhase/>}
          {Choice && <Picked/>}
          {Choice && House && <WinLose />}
      </ChoiceContext.Provider>
      <Button onClick={ onRulesButtonCLick }>Rules</Button>
      <Rules Visibility={ rulesVisible } setRulesVisibility={ setRulesVisible }/>
    </div>
  );
}

export default App;
