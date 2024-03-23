import { useState } from "react"
import { useEffect } from "react"
import { useReducer } from "react"

export default function ToDo() {
    const url = "https://jsonplaceholder.typicode.com/todos"

    const [task, setTask] = useState("")
    const add = (prevState, newTask) => [...prevState, newTask] 

    const [data, dispatch] = useReducer(add, [])

    useEffect(() => {
        fetch(url).then(d => d.json()).then(d => d.map((task) => dispatch(task)))
    }, [])

    return (
        <div>
            <div><b style={{fontSize: "32px",}}>Task list</b></div>
            <div>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button type="submit" onClick={() => dispatch({
                    completed: false,
                    id: data.length + 1,
                    title: task,
                    userId: "test"
                })}>add task</button>
            </div>
            <br />
            <div>{data && data.map((t) => <div><b>Task {t.id}: {t.title}</b> <hr/></div>)}</div>
        </div>  
    )
}