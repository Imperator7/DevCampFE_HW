import { useEffect, useState } from "react"

export default function Tasks({tasks, handleCheckbox, handleDel, handleEdit, confirmEdit, setEdit, edit}) {

    return (
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Title</th>
                            <th>Due Date</th>
                            <th>Finish?</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => {
                            return ( 
                                    <tr key={task.id}>
                                        <th>{task.id}</th>
                                        <td>{task.edit ? <div><input type="text" placeholder="Edit title here" value={edit} onChange={(e) => {setEdit(e.target.value)}}/><button onClick={() => {confirmEdit(edit,task.id); setEdit("")}}>Confirm to edit</button></div>: task.title} </td>
                                        <td>{task.date}</td>
                                        <td><input type="checkbox" onChange={(e) => handleCheckbox(e)} id={task.id}/>{task.finished ? 'Done': 'Not done yet'}</td>
                                        <td><button onClick={handleEdit} id={task.id}>Edit</button><button onClick={(e)=> handleDel(e)} id={task.id}>Del</button></td>
                                    </tr>
                                ) 
                            })
                        }
                    </tbody>
                </table>
            </div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        </div>
    )
}