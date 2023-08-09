import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()

    const handleLogout = (e) => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Bros</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}