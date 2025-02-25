import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';

function App() {
  return (
    <div>
      <h1 className="bg-success">Hello Redux</h1>
      <Countries></Countries>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
