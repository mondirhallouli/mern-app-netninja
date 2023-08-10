import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import useAuthContext from "./hooks/useAuthContext";

export default function App() {
    const { user } = useAuthContext()

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
                        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}