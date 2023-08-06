import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

export default function useWorkoutsContext() {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsContext can only be used inside a WorkoutsContextProvider!')
    }

    return context
}