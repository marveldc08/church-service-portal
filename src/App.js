import './App.css';
import { useContext, useState, useEffect } from 'react';
import { AccessContexts } from './components/Contexts';
import Context from './components/Contexts';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <AccessContexts>
        <Dashboard />
      </AccessContexts>
    </div>
  );
}

export default App;
