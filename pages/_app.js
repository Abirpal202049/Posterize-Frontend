import '../styles/globals.css'
import AppContext from "../AppContext";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [token, setToken] = useState("Hi")

  return <AppContext.Provider value={{
    token : token,
    setToken : setToken
  }}>

    <Component {...pageProps} />
  </AppContext.Provider>
}

export default MyApp
