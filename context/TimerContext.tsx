import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

interface TimerContextType {
    duration : number
    setDuration : Dispatch<SetStateAction<number>>
}


export const TimerContext = createContext<TimerContextType>({
    duration : 10,
    setDuration : () => {}
})

export const useTimerContext = () => {
    const context = useContext(TimerContext)
    if (context === null) {
        throw new Error("useTimerContext must be used in AppContextProvider")
    }
    return context
}


interface TimeProviderProps {
    children : React.ReactNode
}


const TimerProvider: React.FC<TimeProviderProps> = ({children}) => {
        const [duration,setDuration] = useState(10)
        return (
            <TimerContext.Provider value={{duration,setDuration}}>
                {children}
            </TimerContext.Provider>
        )
}

export default TimerProvider