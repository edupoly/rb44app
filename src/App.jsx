import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div>
      <h1 className="bg-success">Hello Soundarya</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
