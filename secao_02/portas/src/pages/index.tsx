import React from "react";
import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { atualizarPortas, criarPortar } from "../functions/portas";

export default function Home() {
  const [portas, setPortas] = useState(criarPortar(2, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
  
  return (
   <div style={{display: 'flex'}}>
    { renderizarPortas() }
   </div>
  )
}
