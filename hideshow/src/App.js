import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {
        show ? <h1>Hello Gourav!</h1> : null
      }
      <button onClick = {() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
