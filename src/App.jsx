import React from 'react'
import NavBar from './components/NavBar'
import AppRouter from './Router/AppRouter'
import { MyContext } from "./context/MyContext"
import { useState } from "react";
import { useEffect } from "react";


function App  ()  {

  const [pizzas, setPizzas] = useState([]);


  const getPizzas = async () => {
    const res = await fetch("../src/data/pizzas.json");
    let data = await res.json();
    setPizzas(data);
};

useEffect(() => {
  getPizzas();
}, []);


  return (

    <div>

  
<MyContext.Provider value={{ pizzas,
                    setPizzas}}>
<NavBar />
<AppRouter />
</MyContext.Provider>
     

  

    </div>
  )
}

export default App