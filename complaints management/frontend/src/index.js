import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './features/login';
import SignUP from './features/sign';
import ComplaintForm from './features/complaintForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/SignUP",
        element:<SignUP></SignUP>
      },
      {
        path:"/Complaint",
        element:<ComplaintForm></ComplaintForm>
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


reportWebVitals();
