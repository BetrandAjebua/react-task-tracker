import React from 'react'

function Button({color="green", text="add" , onAdd , showHeader}) {


  return (
    <button style={{backgroundColor:!showHeader? color:"red"}} className='btn' onClick={onAdd} >{!showHeader? text:"Close"}</button>

  )
}

export default Button
