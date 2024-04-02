import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx';
import Employees from './routes/employee.jsx'
import Department from './routes/department.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/employee",
    element: <Employees />
  },
  {
    path: "/department",
    element: <Department />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
