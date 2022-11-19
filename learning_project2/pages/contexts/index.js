
import React, { createContext,useState } from 'react'

const SingleEventContext = createContext()

const EventsContext = ({child}) => {
     
    const [detail, setDetail] = useState([])

  return (
    <SingleEventContext.Provider value={{detail, setDetail}}>
        {child}
    </SingleEventContext.Provider>
  )
}

export default EventsContext