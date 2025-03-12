import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import TenziesPage from './pages/TenziesPage/TenziesPage.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />
},{
  path: '/tenzies',
  element: <TenziesPage />
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
