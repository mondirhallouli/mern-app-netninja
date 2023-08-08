import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { WorkoutContextProvider } from "../context/WorkoutsContext"
import { AuthContextProvider } from "../context/AuthContext"

function AppLayout() {
    return (
        <AuthContextProvider>
            <WorkoutContextProvider>
                <div className='App'>
                    <Navbar />
                    <div className="pages">
                        <Outlet />
                    </div>
                </div>
            </WorkoutContextProvider>
        </AuthContextProvider>
    )
}

export default AppLayout