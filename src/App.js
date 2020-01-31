import React, {useState} from 'react';
import './App.css';

function App() {
  const [textInput, setTextInput] = useState('')

  function handleChange (event) {
    setTextInput(event.target.value)
  }

  console.log(textInput)
  return (
    <div className="App" >
      <h1>SPEED TYPER</h1>
      <textarea 
        onChange={handleChange}/>
      <button> Start </button>
      <p>Time Remaining: 10 seconds</p>
      <p> Word Count: </p>
    </div>
  );
}

export default App;
