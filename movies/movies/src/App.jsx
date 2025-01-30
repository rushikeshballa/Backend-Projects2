import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './features/navbar';


function App() {
  return(
    <div>
       <NavBar></NavBar> 
       <Outlet></Outlet>
       
    </div>
  
  )
}

export default App;
