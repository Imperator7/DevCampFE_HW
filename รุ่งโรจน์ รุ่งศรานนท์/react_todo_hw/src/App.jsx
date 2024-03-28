import { useState } from 'react'
import ToDoList from './components/toDoList'
import Tasks from './components/tasks'
import './App.css'
import { useEffect } from 'react'

let Id = 0

function App() {
  const [input, setInput] = useState("")
  const [date, setDate] = useState("")
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState("")

  const handleCheckbox = (e) => {
    setTasks((prev) => prev.map((task) => task.id === Number(e.target.id) ? {id: task.id, title: task.title, date: task.date, finished: !task.finished, edit: task.edit}: task))
  }

  const handleOnChange = (Input) => {
    setInput(Input)
  }

  const handleOnDateChange = (Date) => {
    setDate(Date)
  }

  const handleOnSubmit = () => {
    console.log(date)
    if (!input) {
      return;
    }
    if (!date) {
      return;
    }
    setTasks(prev => [...prev, {id: Id, title: input, date: date, finished: false, edit: false}])
    setInput("")
    setDate("")
    Id += 1
  }
  
  const handleDel = (e) => {
    setTasks(tasks.filter((task) => task.id != e.target.id))
  }
  
  const handleEdit = (e) => {
    setTasks((prev) => prev.map((task) => task.id === Number(e.target.id) ? {id: task.id, title: task.title, date: task.date, finished: task.finished, edit: !task.edit}: task));
    setEdit("")
  }

  const confirmEdit = (edit, id) => {
    setTasks((prev) => prev.map((task)=> task.id === id ? {id: task.id, title: edit, date: task.date, finished: task.finished, edit: !task.edit} : task))
  }
  return (
    <>
      <ToDoList handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} handleOnDateChange={handleOnDateChange} task={input} date={date}/>
      <Tasks tasks={tasks} handleCheckbox={handleCheckbox} handleDel={handleDel} handleEdit={handleEdit} confirmEdit={confirmEdit} setEdit={setEdit} edit={edit}/>
    </>
  )
}

export default App
