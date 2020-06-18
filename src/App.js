import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Dashboard />
      </div>
    </RecoilRoot>
  );
}

export default App;
