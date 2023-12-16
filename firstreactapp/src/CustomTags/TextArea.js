import React, { useState } from 'react'
import '../App.css';

export default function TextArea(props) {
  const changeUpperText = () => {
    if(text==='')
    {
      props.showAlert('Please Enter Your text!!','danger')
    }
    else{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Upper case done!!','success')
    console.log("uppper case clicked");
    }

  }
  const changeClearText = () => {
    setText('')
  }

  const clearExtraSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    props.showAlert('Remove Extra spaces!!','success')
    setText(newText)
  }

  const handleSwitchChange = () => {
    setIncludeSpaces(!includeSpaces);
  };


  const countWords = () => {
    if (!includeSpaces) {
      // Split by any whitespace character
      return text.split(/\s+/).filter((word) => word !== '').length;
    } else {
      // Split only by non-whitespace characters
      return text.split(/\s+/).filter((word) => word !== '').join('').length;
    }
  };


  const handleOnchange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  }

  const handleOnModechange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  }

  const handleMode = () => {
    if (enablemode.color === 'black') {
      setenableMode({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setbtnText('Enable light Mode')
    }
    else {
      setenableMode({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
      })
      setbtnText('Enable Dark Mode')
    }
  }

const copyText = () => {
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert('Copied Successfully!!','success')
}

const [text, setText] = useState('');
const [includeSpaces, setIncludeSpaces] = useState(true);
const[btnText,setbtnText]=useState('Enable dark mode');
const [enablemode, setenableMode] = useState({
  color: 'black',
  backgroundColor: 'white',
  border: '1px solid black'
})
return (
  <div>
    <h1 className='heading' style={{color: props.mode==='light'?'black': 'white'}}>{props.heading}</h1>
    <div className='container'>
      <div className="form-group">
        <textarea className="form-control my-4"    style={{backgroundColor: props.mode==='light'?'white': '#dedff3'}}  value={text} onChange={handleOnchange} id="mybox" rows="14"></textarea>
        <button className={`btn btn-${props.redmode==='light'?'primary':'success'} mx-3`} onClick={changeUpperText}>Convert to UpperCase</button>
        <button className={`btn btn-${props.redmode==='light'?'primary':'success'} mx-3`} onClick={changeClearText}>Clear Text</button>
        <button className={`btn btn-${props.redmode==='light'?'primary':'success'} mx-3`} onClick={clearExtraSpace}>Clear Extra Space</button>
        <button className={`btn btn-${props.redmode==='light'?'primary':'success'} mx-3`} onClick={copyText}>Copy Text</button>
      </div>
      <div className='container my-3'>
        <div className="form-check form-switch">
          <input className="form-check-input " type="checkbox" checked={includeSpaces} onClick={handleSwitchChange} id="flexSwitchCheckDefault" />
          <label className=" count form-check-label " style={{color: props.mode==='light'?'black': 'white'}}  htmlFor="flexSwitchCheckDefault">Include spaces</label>
          <p className=' count my-3' style={{color: props.mode==='light'?'black': 'white'}}> No of words count {countWords()} No of character count {text.length}</p>
</div>
</div>

{/* <div className='container my-3'>
<div className='form-check form-switch'>
          <input className="form-check-input " type="checkbox" onClick={handleMode} id="mode" />
          <label className=" count form-check-label " htmlFor="flexSwitchCheckDefault">{btnText}</label>
         </div>
         </div> */}
         </div>
        






    </div>



)


}
