import logo from './logo.svg';
import './App.css';
import Navbar from './CustomTags/Navbar';
import TextArea  from './CustomTags/TextArea';
import ReactDOM from "react-dom";
import { useState } from 'react';
import Alert from './CustomTags/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const[btnText,setbtnText]=useState('Enable dark mode');
  const[redText,setredText]=useState('Enable red mode');
  const[alert,setAlert]=useState(false);
  const[redmode,setredMode]=useState('light');

  const showAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
    

  const [enablemode, setenableMode] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black'

  })

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setbtnText('Enable light Mode');
      document.body.style.backgroundColor ='#13152a'
      showAlert('Enable dark mode','success')
    }
    else{
      setMode('light');
      setbtnText('Enable Dark Mode');
      document.body.style.backgroundColor ='white'
      showAlert('Enable light mode','success')
    }
  }
  const redToggleMode =()=>{
    if(redmode==='light'){
      setredMode('red');
      setredText('Enable light Mode');
      document.body.style.backgroundColor ='#eaac9b'
      showAlert('Enable red mode','success')
    }
    else{
      setredMode('light');
      setredText('Enable red Mode');
      document.body.style.backgroundColor ='white'
      showAlert('Enable light mode','success')
    }
  }
  return (
    <>
    <Navbar tittle="TextUtils" mode={mode} redmode={redmode} toggleMode={toggleMode} text={btnText} redText={redText} redToggleMode={redToggleMode} about="About Us"/>
    <Alert alert={alert}/>
    <TextArea showAlert={showAlert} mode={mode} toggleMode={toggleMode} redToggleMode={redToggleMode} redmode={redmode} heading ="Text Changer"/>
    

    </ >
  );
}
export default App;


