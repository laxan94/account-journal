import "../styles/globals.css"
import "bootswatch/dist/darkly/bootstrap.min.css"
import { useState, useEffect } from "react"
import { createContext } from "react"

export const StateContext = createContext()

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState([])
  const contextData = { data, setData }

  return (
    <StateContext.Provider value={contextData}>
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}

export default MyApp
