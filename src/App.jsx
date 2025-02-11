import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div>
      <h1 className="bg-success">Hello Edupoly</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
