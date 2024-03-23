
import { useNavigate, useParams } from "react-router-dom"
export default function ToDoItem() {
    const navigate = useNavigate()
    const {todoitem} = useParams()
    return (
    <div>
        <h2 style={{margin: "0px"}}>Task {todoitem}</h2>
        <p  style={{margin: "0px", marginBottom: "10px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo fuga, eius excepturi consequatur commodi nisi debitis impedit sapiente. Recusandae atque amet similique inventore nemo possimus quas cupiditate quos et.</p>
        <button onClick={()=>navigate("/todos")}>Back</button>
    </div>   
    )
}