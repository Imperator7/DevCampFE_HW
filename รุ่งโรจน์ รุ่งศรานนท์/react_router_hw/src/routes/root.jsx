import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./root.css"
export default function Root() {

    return (
        <>
        <div id="sidebar">
            <div>
                <h1>Resume</h1>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/job">Job</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/skill">Skill</Link></li>
                        <li><Link to="/todos">To-do list</Link></li>
                    </ul>
                </nav>
            </div>
            <hr />
            <div id="detail">
                <Outlet />
            </div>
        </div>
  
        
        </>
        
    )
}