import { Link } from 'react-router-dom'
import '../CSSfiles/NavBar.css'

export default function Navbar() {
    return (
        <nav>
            <h1>Marks To Do List</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="./Tasks">View Tasks</Link>
                </li>
                <li>
                    <Link to="./AddTasks">Add Tasks</Link>
                </li>
            </ul>
        </nav>
    )
}