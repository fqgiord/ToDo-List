import React from 'react';
import './App.css';
import TodoApp from './TodoApp';


function App() {
  return (
    <div className="App">
      <header className="App-header p-5">
        <h1 className="text-2xl mb-5">Tool list React Test</h1>
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
