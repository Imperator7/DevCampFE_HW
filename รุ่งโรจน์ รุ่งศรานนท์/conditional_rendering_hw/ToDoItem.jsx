export default function ToDoItem(props) {
    return (props.priority == 0 ? (<div style={{backgroundColor: "red"}}>Task number {props.num}</div>) : (<div>Task number {props.num}</div>))
}