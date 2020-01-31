import React, {useState} from 'react';
import './App.css';

function App() {

  //track the text in the textarea on each keystroke
  const [textInput, setTextInput] = useState('')
  
  function handleChange (event) {
    const {value} = event.target
    setTextInput(value)
  }

  //calculate the number of words in the textInput
  function countWords(textInput){
    let wordsArr = textInput.trim().split(' ')
    return wordsArr.length;
  }

  
  
  return (
    <div className="App" >
      <h1>SPEED TYPER</h1>
      <textarea 
        onChange={handleChange}
        value={textInput}/>
      <button onClick={() => console.log(countWords(textInput))}> Start </button>
      <p>Time Remaining: 10 seconds</p>
      <p> Word Count: </p>
      <p> Character Count: {textInput.length}</p>
    </div>
  );
}

export default App;
