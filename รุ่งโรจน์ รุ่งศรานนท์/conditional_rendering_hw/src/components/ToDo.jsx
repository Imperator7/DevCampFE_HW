import ToDoItem from "./ToDoItem"

const toDoItems = [
    {
        num: 1,
        priority: 0
    },
    {
        num: 2,
        priority: 1
    },
    {
        num: 3,
        priority: 0
    },
    {
        num: 4,
        priority: 1
    },
    {
        num: 5,
        priority: 1
    },
    {
        num: 6,
        priority: 1
    },
    {
        num: 7,
        priority: 1
    },
    {
        num: 8,
        priority: 1
    },
    {
        num: 9,
        priority: 1
    },
    {
        num: 10,
        priority: 1
    }
]

function ToDo() {
    return (
        <div>
            <div><h3 style={{margin: "0px", marginBottom: "5px"}}>To-do List</h3></div>
            {toDoItems.map((item) => {
            return (<ToDoItem num={item.num} priority={item.priority}/>)
        })}
        </div>
    )

}

export default ToDo