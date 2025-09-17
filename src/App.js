import React from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ExpenseForm />
        <ExpenseList />
      </main>
    </div>
  );
}

export default App;
