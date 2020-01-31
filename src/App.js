import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  //track the text in the textarea on each keystroke
  const [textInput, setTextInput] = useState('')
  const [timeRemain, setTimeRemain] = useState(3)
  
  function handleChange (event) {
    const {value} = event.target
    setTextInput(value)
  }

  //calculate the number of words in the textInput
  function countWords(textInput){
    let wordsArr = textInput.trim().split(' ')
    return wordsArr.length;
  }

  //render time remaining
  useEffect(() => {
    if(timeRemain >0) {
      setTimeout(() => {
        setTimeRemain(time => time -1)
      }, 1000)
    }
  }, [timeRemain])

  return (
    <div className="App" >
      <h1>SPEED TYPER</h1>
      <textarea 
        onChange={handleChange}
        value={textInput}/>
      <button onClick={() => console.log(countWords(textInput))}> Start </button>
      <p>Time Remaining: {timeRemain}</p>
      <p> Word Count: </p>
      <p> Character Count: {textInput.length}</p>
    </div>
  );
}

export default App;
