import logo from './logo.svg';
import './App.css';
import Navbar from './features/navber';
import Login from './features/login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <div >
    <Navbar/>
    <Outlet></Outlet>
    
   </div>
  );
}

export default App;
