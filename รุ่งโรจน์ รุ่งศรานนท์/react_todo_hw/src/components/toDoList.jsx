export default function ToDoList({handleOnChange, handleOnDateChange, handleOnSubmit, task, date}) {

    return (
        <div>
            <h1>To-do List</h1>
            <input type="text" onChange={(r) => handleOnChange(r.target.value)} value={task}/>
            <input type="date" onChange={(d) => handleOnDateChange(d.target.value)} value={date}/>
            <button style={{margin: "5px"}} onClick={() => handleOnSubmit()}>Add Task</button>
            <hr />
        </div>
    )
}