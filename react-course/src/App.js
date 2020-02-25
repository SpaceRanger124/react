import React from 'react';
import './App.css';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
	  <Card caption="Mars" description="This is a planet in the Solar System" />
    </div>
  );
}

export default App;
