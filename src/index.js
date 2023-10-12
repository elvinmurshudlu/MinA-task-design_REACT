import React from 'react';
import ReactDOM from 'react-dom/client';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'bootstrap/dist/css/bootstrap.css';



import './index.css';

import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CardsPage from "./pages/CardsPage/CardsPage";
import { NewCard } from './pages/NewCard/NewCard';
import { PrimeReactProvider } from 'primereact/api';
import { Detail } from './pages/CardDetail/Detail';

//theme


const routes = createBrowserRouter([{
    path:'/',
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
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>

    
    <RouterProvider router={routes}>
    </RouterProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);


