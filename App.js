import React from 'react';
import './App.css';
import { Menubar } from "primereact/menubar";
import UserList from './components/UserList';

let App = ()=> {
  return (
    <div className="App">
      <Menubar className='bg-blue-600 p-3 text-3xl text-white' start={'PROJECT '} />
      <UserList/>
    </div>
  );
}

export default App;