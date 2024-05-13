import { createContext } from "react";

const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used whitin a TaskProvider")
    }

    return context;
}

export function TaskProvider({ children }){
    return(
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    )
}