import { useState } from "react"
import useFetch from "../hw_3/useFetch"
import { useEffect } from "react"

export default function ToDo() {
    const url = "https://jsonplaceholder.typicode.com/todos"
    const [data, setData] = useState()
    useEffect(() => {
        fetch(url).then(d => d.json()).then(d => setData(d))
    },[url])

    return (
        <div>
            <div><b style={{fontSize: "32px",}}>Task list</b></div>
            <br />
            <div>{data && data.map((t) => <div><b>Task {t.id}: {t.title}</b> <hr/></div>)}</div>
        </div>  
    )
}