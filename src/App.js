import React from 'react';
import './css/bootstrap-grid.min.css';
import './index.sass';
import Header from './components/header/header.jsx';
import Main_one from './components/main/main_one.jsx';
import Main_two from './components/main/main_two';

function App() {
  return (
    <div className="container">
      <Header />
      <Main_one/>
      <Main_two/>
    </div>

  )
}

export default App;
