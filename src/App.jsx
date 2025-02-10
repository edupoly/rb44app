import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import Address from './Address'
function App() {
  var ref1 = useRef();
  var ref2 = useRef();
  var ref3 = useRef();
  var ref4 = useRef();

  useEffect(()=>{
    ref1.current.focus();
  },[])
  function checkEnter(e){
    if(e.key==='Enter'){
      ref2.current.focus();
    }
  }
  function checkEnter2(e){
    if(e.key==='Enter'){
      ref3.current.focus();
    }
  }
  return (
    <div className='container'>
      <h1 className="bg-success">Hello Soundarya</h1>
      <input type="text" ref={ref1} onKeyUp={(e)=>{checkEnter(e)}}/>
      <br />
      <input type="text" ref={ref2} onKeyUp={(e)=>{checkEnter2(e)}}/>
      <Address ref={[ref3,ref4]}></Address>
      <input type="text" ref={ref4}/>
    </div>
  );
}

export default App;
