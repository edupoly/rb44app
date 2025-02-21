import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div className='border m-3 p-2'>
        <h2>Counter:{props.counterReducer.count}</h2>
        <button className="btn btn-danger" onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter)