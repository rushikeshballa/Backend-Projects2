import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import NavBar from './features/navbar';
import Titles from './features/title';
import Movies from './features/movies';
import Movie from './features/movie';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
      path: "/",
      element:<Titles></Titles>,
      },
      {path:"/home",
       element:<Movies></Movies>
      },
      {
        path:`/movie/:name`,
        element:<Movie></Movie>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
