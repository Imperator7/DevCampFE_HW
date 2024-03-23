import { Link } from "react-router-dom"
import ToDoItem from "./ToDoItem"

const items = [1,2,3,4,5,6,7,8,9,10]

export default function ToDo() {
    return ( <div><h3 style={{margin: "0"}}>To-do List</h3>
            <div className="toDoItems">
                {items.map((item)=> <div><Link to={`/todos/${item}`}>Task {item}</Link></div>)}
            </div>
        </div>
        
    )
}