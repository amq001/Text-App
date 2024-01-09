import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    const actual = lower.charAt(0).toUpperCase() + lower.slice(1);
    return actual;
  }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
      </div>
    </div>}
    </div>
  )
}

export default Alert
