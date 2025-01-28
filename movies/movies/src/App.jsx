import logo from './logo.svg';
import './App.css';
import { useGetMoviesbytitleQuery, useGetMoviesQuery } from './services/moviesApi';
import { useState } from 'react';

function App() {
  var {isloding,data:movies}=useGetMoviesQuery() 
  var [x,setx]=useState();

  var {isloding,data:movie}=useGetMoviesbytitleQuery(x)
  console.log(movie);
  
  var abc= function (a) {
   var y =  document.getElementById("a1").value
   setx(y)
  }
  return (
    <div>
      <input type="text" id='a1' />
      <button onClick={(()=>{abc()})}>Search</button>
    {
       movies?.map((mov)=>{
        return(
          <div>{mov}</div>
        )
      })
    }
 
 
    </div>
  );
}

export default App;
