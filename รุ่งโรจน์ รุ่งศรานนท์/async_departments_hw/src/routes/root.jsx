import { Link } from "react-router-dom"

export default function Root() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Link to="/employee">Go to employees page</Link>
            <Link to="/department">Go to department page</Link>
        </div>
    )
}