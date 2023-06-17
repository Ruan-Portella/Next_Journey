import React, { useState } from "react";
import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdPortas] = useState(3)

  return (
   <div className={styles.formulario}>
    <div>
      <Cartao>
        <EntradaNumerica value={qtdePortas} onChange={novaQtd => setQtdPortas(novaQtd)} text='Qtde Portas?'/>
      </Cartao>
    </div>
    <div>
      <Cartao bgcolor='#28a085'>
        <Link href={`/jogo/${qtdePortas}`}>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Cartao>
    </div>
   </div>
  )
}
