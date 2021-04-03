import React, { useEffect, useState } from "react";
import { Loader } from "./Components/Loader";
import { Main } from "./Components/Main";
import "./styles/styles.css";


function App() {
const [Loading, setLoading] = useState({ state: true });
  useEffect(() => {
    setTimeout(() => {
      setLoading({
        state:false
      })
    }, 1600);
    
    
  }, [Loading.state])
 
  return <>{Loading.state ? <Loader /> : <Main />}</>;
}

export default App;
