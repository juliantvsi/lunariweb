import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { Home, Favorites, DetailShop, DinamicPage, ValidateSuccefull, Profile, DinamicForm } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <h1>Error page not found¿?</h1>,
    element: <Home />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
  {
    path: '/complete-purchase',
    element: <DetailShop />
  },
  {
    path: '/section/:category',
    element: <DinamicPage />
  },
  {
    path: '/search/*',
    element: <DinamicPage />
  },
  {
    path: '/validate/:token',
    element: <ValidateSuccefull />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/login',
    element: <DinamicForm />
  },
  {
    path: '/singup',
    element: <DinamicForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
      <React.StrictMode>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </React.StrictMode>
    </Provider>
)
