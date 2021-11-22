import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const TIME_TO_TYPE = 10

  //track the text in the textarea on each keystroke
  const [textInput, setTextInput] = useState('')
  const [timeRemain, setTimeRemain] = useState(TIME_TO_TYPE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemain(TIME_TO_TYPE)
    setTextInput('')
    setWordCount(0)
  }
  
  function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWords(textInput))
  }

  function handleChange (event) {
    const {value} = event.target
    setTextInput(value)
  }
  function reset (){
    setIsTimeRunning(false)
  }

  //calculate the number of words in the textInput
  function calculateWords(textInput){
    let wordsArr = textInput.trim().split(' ')
    return wordsArr.length;
  }

  //render remaining countdown time in seconds
  useEffect(() => {
    if(isTimeRunning && timeRemain > 0) {
      setTimeout(() => {
        setTimeRemain(time => time -1)
      }, 1000)
    } else if(timeRemain===0){
      endGame()
    
    }
  }, [isTimeRunning, timeRemain])

  return (
    <div className="App" >
      <h1>Speed Typer</h1>
      
      <textarea 
        onChange={handleChange}
        value={textInput}
        disabled={!isTimeRunning}
        placeholder="How many words can you type in 10 seconds?"
      />
      <div class="buttons">
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      > Start </button>
      <button id="reset"
        onClick={reset}
        disabled={!isTimeRunning}
      > Reset </button>
      </div>
      <div className="stats"><span>Time Remaining: {timeRemain} seconds</span>
      <span> Word Count: {wordCount} words</span></div>
    </div>
  );
}

export default App;
