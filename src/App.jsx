
import { Outlet } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className='m-3 p-3 border'>
      <h1>App</h1>
      <Link to="/home">home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus">aboutus</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">countries</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
