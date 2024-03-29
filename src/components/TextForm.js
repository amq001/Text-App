import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }
  const handleLowClick = ()=>{
    // console.log("Lowerwcase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")

  }
  const handleOnChange = (event)=>{
    // console.log("handling On Change")
    setText(event.target.value)
  }
  const handleClearClick = ()=>{
    let newText = ""
    setText(newText)
    props.showAlert("Text has been cleared","success")

  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied","success")

  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success")
  }
  const [text,setText] = useState("Enter text here")
  // text = "new text"; //wrong
  // setText("New Text"); //Correct

  return (
      <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} Characters</p>
        <p>{0.008*text.trim().split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>

      </>
  )
}
