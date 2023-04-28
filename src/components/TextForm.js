import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
export default function TextForm(props) {
    const handleclick=()=>
    {
        const newtext=text.toUpperCase();
        setText(newtext);
    }
    const copyclick=()=>
    {
        navigator.clipboard.writeText(text);
    }
    const clearclick=()=>
    {
       // const newtext=text
        setText('')
    }
    const handlechange=(event)=>
    {
       console.log("onchange")
       setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">

                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}}onChange={handlechange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleclick}>click to convert</button>
            <button className="btn btn-primary mx-3" onClick={copyclick}>click to copy</button>
            <button className="btn btn-primary mx-3" onClick={clearclick}>click to clear</button>
          
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'red'}} >
            <h2>Your text summary</h2>
            <p>No of charecers are {text.length} and number of words are {text.split(" ").length} and number of lines are {text.split("\n").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
          
        </div>
      </>
    )
}
