import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { WorkoutContextProvider } from "../context/WorkoutsContext"

function AppLayout() {
    return (
        <WorkoutContextProvider>
            <div className='App'>
                <Navbar />
                <div className="pages">
                    <Outlet />
                </div>
            </div>
        </WorkoutContextProvider>
    )
}

export default AppLayout