import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import mycontext from './MyContext';
import { useState } from 'react';

function App() {
  var [userdetails,setUserDetails] = useState({
    username:"praveen",
    gender:'male',
    abc:function(){
      console.log(this)
      setUserDetails({...userdetails,username:'suma'})
    }
  })
  return (
    <mycontext.Provider value={userdetails}>
      <div>
        <h1 className="bg-success">Parent Child Comm</h1>
        <Parent></Parent>
      </div>
    </mycontext.Provider>
  );
}

export default App;

// 1. controlled components
// 2. uncontrolled components
// 3. smart components
// 4. dumb components
// 5. presentational components
// 6. container components
// 7. functional components
// 8. Class Components
// 9. Higher Order Component
//10. Pure Component