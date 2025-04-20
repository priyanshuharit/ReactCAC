import React from 'react'

function Changer(props) {

  

  return (
  <>
  
  <button className={props.color}  onClick={()=>{
    document.querySelector("body").style.backgroundColor=props.name
  }}>
    {props.name}

  </button>
  </>
  )
}

export default Changer
