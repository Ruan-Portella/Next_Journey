import styles from '../../../../styles/Jogo.module.css'
import React, { useEffect } from "react";
import { useState } from "react";
import Porta from "../../../../components/Porta";
import { atualizarPortas, criarPortar } from "../../../../functions/portas";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([])


  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortar(portas, temPresente));
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
  
  return (
   <div className={styles.jogo}>
    <div className={styles.portas}>
    { renderizarPortas() }
    </div>
    <div className={styles.botoes}>
        <Link href={'/'}>
            <button>Reiniciar Jogo</button>
        </Link>
    </div>
   </div>
  )
}
