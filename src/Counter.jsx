import React from 'react'
import { connect } from 'react-redux'
import { incCounter } from './store/action'
function Counter(props) {
    console.log("counter rendered")
  return (
    <div className='border m-3 p-2'>
        <h2>Counter:{props.count}</h2>
        <button className="btn btn-danger" onClick={()=>{props.incCnt()}}>Increment</button>
    </div>
  )
}
function mapStateToProps(state){ return state.counterReducer}
function mapDispatchToProps(dispatch){
  return {
    incCnt:()=>{dispatch(incCounter())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)