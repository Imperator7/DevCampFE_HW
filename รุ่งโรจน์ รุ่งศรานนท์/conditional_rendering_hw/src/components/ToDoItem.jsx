export default function ToDoItem(props) {
    return (props.priority == 0 ? (<div style={{backgroundColor: "red"}}>Task {props.num}</div>) : (<div>Task {props.num}</div>))
}