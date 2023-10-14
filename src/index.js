import React from 'react';
import ReactDOM from 'react-dom/client';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'bootstrap/dist/css/bootstrap.css';



import './index.css';

import App from './App';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import CardsPage from "./pages/CardsPage/CardsPage";
import { NewCard } from './pages/NewCard/NewCard';
import { PrimeReactProvider } from 'primereact/api';
import { Detail } from './pages/CardDetail/Detail';
import { ThemeContext } from './contexts/ThemeContext';

//theme


const routes = createBrowserRouter([{
    path:'',
    element:<App></App>,
    children:[
        {
            path:'/',
            element:<CardsPage></CardsPage>
        },
        {
          path:'/new-card',
          element:<NewCard></NewCard>
        },
        {
          path:"cards/:id",
          element:<Detail></Detail>
        }
    ]
},{
  path:'*',
  element:<Navigate to={'/'} replace></Navigate>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
    
    <ThemeContext>
        <RouterProvider router={routes}>
        </RouterProvider>
    </ThemeContext>
     
    </PrimeReactProvider>
  </React.StrictMode>
);


