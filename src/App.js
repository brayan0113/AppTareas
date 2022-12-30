import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="container-task">
        <h1>Mis tareas 📝</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
