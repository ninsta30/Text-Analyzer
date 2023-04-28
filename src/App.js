import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
// import { BrowserRouter } from 'react-router-dom';

//import { Switch, Route } from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }



  return (

    <>

      <Nav heading="Conversion" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm heading="Enter the text to analyze" mode={mode} />




      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
