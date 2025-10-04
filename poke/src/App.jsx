import './App.css'
import Contador from './componentes/contador'
import ContadorCompartilhado from './componentes/contadorcompartilhado'
import { useState } from "react";

function App() {
  const [countCompartilhado, setCountCompartilhado] = useState(0);

  return (
    <>
      <h1> Contadores em React </h1>
      <Contador />
      <Contador />
      <br />

      <ContadorCompartilhado
        count={countCompartilhado}
        setCount={setCountCompartilhado}
      />
      <ContadorCompartilhado
        count={countCompartilhado}
        setCount={setCountCompartilhado}
      />
    </>
  )
}

export default App
