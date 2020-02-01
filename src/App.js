import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  //track the text in the textarea on each keystroke
  const [textInput, setTextInput] = useState('')
  const [timeRemain, setTimeRemain] = useState(3)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  
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
      setIsTimeRunning(false)
      setWordCount(calculateWords(textInput))
    }
  }, [timeRemain, isTimeRunning])

  return (
    <div className="App" >
      <h1>SPEED TYPER</h1>
      <textarea 
        onChange={handleChange}
        value={textInput}/>
      <button onClick={() => setIsTimeRunning(true)}> Start </button>
      <p>Time Remaining: {timeRemain}</p>
      <p> Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
