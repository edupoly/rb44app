import React from 'react'
import { useNavigate } from 'react-router-dom'

function Aboutus() {
  var navigate = useNavigate();
  function gothere(){
    navigate("/products")
  }
  return (
    <div>
      <h3>Aboutus</h3>
      <button onClick={()=>{gothere()}}>Goto Products</button>
    </div>
  )
}

export default Aboutus