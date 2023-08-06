import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to='/'>
                        <h1>Workout Bros</h1>
                    </Link>
                </nav>
            </div>
        </header>
    )
}