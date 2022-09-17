import React from 'react';
import './App.css';
import Headder from './Components/Headder';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <>
      <Sidebar/>
      <div clssName="Appmain">
        <Headder/>
      </div>
    </>
  );
}

export default App;
