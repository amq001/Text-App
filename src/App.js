/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#12366d'
      showAlert("Dark mode has been enabled","success")
      // document.title = 'TextEditz - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      // document.title = 'TextEditz - Light Mode'
    }
  }
  return (
    <>
        <Router>
    <Navbar title="TextEditz" mode={mode} toggleMode={toggleMode} abouttext="About us"/>
    <Alert alert={alert}/>
    <div className="container my-3">

      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextEditz - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
