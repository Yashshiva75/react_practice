import react, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext()

const ContextProvider = ({children}) =>{
    
    const [count,setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1)
    }
    const decrease = ()=>{
       count > 0 ? setCount(count-1): ""
    }

    return(
        <CounterContext.Provider value={{count,increase,decrease}}>
            {children}
        </CounterContext.Provider>
    )
}

export default ContextProvider


