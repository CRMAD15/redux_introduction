import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/containers/TodoContainer';
import TodosFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodosFormContainer></TodosFormContainer>
        {/*  */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
