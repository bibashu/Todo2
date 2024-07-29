import logo from './logo.svg';
import './App.css';
import TodoProvider from './provider/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <header>
       <h1>Todo List</h1>
      </header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
