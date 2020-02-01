import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const TIME_TO_TYPE = 5

  //track the text in the textarea on each keystroke
  const [textInput, setTextInput] = useState('')
  const [timeRemain, setTimeRemain] = useState(TIME_TO_TYPE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemain(TIME_TO_TYPE)
    setTextInput('')
  }
  
  function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWords(textInput))
  }

  function handleChange (event) {
    const {value} = event.target
    setTextInput(value)
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
  }, [timeRemain, isTimeRunning])

  return (
    <div className="App" >
      <h1>SPEED TYPER</h1>
      
      <textarea 
        onChange={handleChange}
        value={textInput}
        disabled={!isTimeRunning}
      />
      
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      > Start </button>

      <p>Time Remaining: {timeRemain}</p>
      <p> Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
