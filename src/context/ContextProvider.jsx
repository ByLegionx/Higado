import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'


export const useAppContext = () => useContext(AppContext)

export const ContextProvider = ({children}) => {

    const [urlClicked, setUrlClicked] = useState(false)
   
    const data ={
        urlClicked,
        setUrlClicked
 
    }

    



  return (
    <AppContext.Provider value={data}>{children}</AppContext.Provider>
  )
}
