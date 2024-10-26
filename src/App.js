import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // Handle input from text box
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Calculate the result based on the input expression
  const calculateResult = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear the input and result
  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  // Delete the last character from the input
  const deleteLastCharacter = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Add value to the input on button click
  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter calculation"
        />
        <div className="result">
          {result !== null ? result : 'N/A'}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={deleteLastCharacter}>DEL</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button className="clear-button" onClick={clearInput}>RESET</button>
        <button className="equal-button" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
