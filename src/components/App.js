import React, { useState, useEffect, Fragment, useRef } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {

  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const inputRef = useRef();

  const onButtonClick = () => {
    
    setList([]);
    for (let i = 1; i < Number(value) + 1; i++) {
      setList((prev) => [...prev, i]);
    }
    setValue('')
  };


 

  return (
    <div id="main">

      <input id="input" onChange={(e) => setValue(e.target.value)} value={value} ref={inputRef} />
      <button id="button" onClick={onButtonClick}>Click</button>
      <ul id="list">
        <List listx={list} />
      </ul>
    </div>
  );
};

export default App;