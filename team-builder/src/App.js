import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';


function App() {

  let [team] = useState([])

  return (
      <div>
      <Form set={team}/>

      </div>
  );
}

export default App;
