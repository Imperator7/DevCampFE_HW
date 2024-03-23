import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/root'
import About from './routes/about'
import Skill from './routes/skill'
import Portfolio from './routes/portfolio'
import Job from './routes/job'
import ToDo from './routes/toDo'
import ToDoItem from './routes/ToDoItem'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />
      },{
        path: "/skill",
        element: <Skill />
      },{
        path: "/portfolio",
        element: <Portfolio />
      },{
        path: "/job",
        element: <Job />
      },{
        path: "/todos",
        element: <ToDo/>
      },{
        path: "/todos/:todoitem",
        element: <ToDoItem />
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
