import React, { useEffect, useState } from 'react';
import './App.css';
import Guess from './Guess';
import Header from './Header';
import { words } from './words';

function App() {

const [ word, setWord ] = useState<String>("");

useEffect(() => {

  setWord(words[Math.floor(Math.random() * words.length)]);
  
}, [] );

console.log(word);

  return (
    <div className="App">
      <Header />
      <Guess />
      
    </div>
  );
}

export default App;
